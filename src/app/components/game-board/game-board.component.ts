import { ToastrService } from 'ngx-toastr';
import { interval, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { SocketService } from '../../services/socket.service';
import { ResizeService } from '../../services/resize.service';
import { FigureModel } from '../../models/figure.model';
import { BoardModel } from '../../models/board.model';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameState } from '../../enums/game-state.enum';
import { LocalStorage } from '../../enums/local-storage.enum';
import { GameStatsObject } from '../../interfaces/game-stats.interface';
import { PlayerData } from '../../interfaces/player-data.interface';
import {
  ACCELERATION,
  CENTRAL_ITEM,
  DELAY_DEFAULT,
  DELAY_LEVEL_STEP,
  MAX_SPEED,
  QUANTITY_BLOCKS_HEIGHT,
  QUANTITY_BLOCKS_WIDTH,
} from '../../constants/board-component.const';

@Component({
  selector: 'atg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit, OnDestroy {
  public isPlaying: boolean;
  public isLostGame: boolean;
  public textStateOverlay: string;
  public userIsAuthenticated: boolean;

  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private boardMatrix: FiguresColors[][];
  private currentFigure: FiguresColors[][];
  private currentMatrix: FiguresColors[][];
  private figurePosition: number;
  private duration: number;
  private lineWithFigure: number;
  private currentLevel: number;
  private blockSize: number;
  private currentPlayer: PlayerData;
  private gameInformation: GameStatsObject;
  private subscriptionState: Subscription;
  private subscriptionMove: Subscription;
  private subscriptionNext: Subscription;
  private subscriptionLevel: Subscription;
  private subscriptionLogout: Subscription;
  private subscriptionLogin: Subscription;
  private subscriptionResize: Subscription;
  private timeInterval: Subscription;

  constructor(
    private gameService: GameService,
    private toastrService: ToastrService,
    private userService: UserService,
    private socketService: SocketService,
    private resizeService: ResizeService,
  ) {
    this.currentFigure = FigureModel.getRandomFigure();
  }

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event): void {
    event.preventDefault();
    this.detectDestruction();
    if (this.userIsAuthenticated) {
      this.socketService.deleteSpectateGame(this.currentPlayer.username);
    }
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.setCanvasSize();

    this.subscriptionResize = this.resizeService.onResizeBlock().subscribe(() => {
      this.setCanvasSize();
      this.redrawBoard();
    });

    this.currentPlayer = JSON.parse(this.userService.getCurrentUser());

    const saveGameStats = localStorage.getItem(LocalStorage.GAME_STATS);

    if (saveGameStats) {
      const {
        boardMatrix,
        currentFigure,
        currentMatrix,
        figurePosition,
        duration,
        lineWithFigure,
      } = JSON.parse(saveGameStats);
      this.isPlaying = false;
      this.boardMatrix = boardMatrix;
      this.currentFigure = currentFigure;
      this.currentMatrix = currentMatrix;
      this.figurePosition = figurePosition;
      this.duration = duration;
      this.lineWithFigure = lineWithFigure;
      this.textStateOverlay = GameState.PAUSE;
      this.redrawBoard();
    } else {
      this.setInitialComponentState();
      this.setInitialBoardState();
    }
    this.isLostGame = false;
    this.isPlaying = undefined;

    this.subscriptionLogin = this.userService.getAuthListener().subscribe((user) => {
      this.userIsAuthenticated = !!user;
    });

    this.subscriptionState = this.gameService.getGameState().subscribe((gameState: GameState) => {
      this.textStateOverlay = GameState.PAUSE;
      this.isPlaying = gameState !== GameState.PAUSE;
      if (this.isLostGame) {
        this.gameService.setInitialInformation();
      }
      this.isLostGame = false;
      if (gameState === GameState.RESET) {
        this.resetGame();
      }
      if (gameState === GameState.PAUSE) {
        this.stopGame();
        this.saveGameStatsAndInformation();
        if (this.userIsAuthenticated) {
          this.socketService.deleteSpectateGame(this.currentPlayer.username);
        }
      }
      if (gameState === GameState.PLAY) {
        this.playGame();
      }
      this.sendStatsToSocket();
    });

    this.subscriptionLogout = this.userService
      .onLogoutListener()
      .pipe(filter((isLogout) => !!isLogout))
      .subscribe(() => {
        this.stopGame();
        this.setInitialComponentState();
        this.redrawBoard();
        this.gameService.setGameState(GameState.PAUSE);
        this.gameService.setInitialInformation();
      });

    this.subscriptionMove = this.gameService
      .onNextStep()
      .pipe(filter(() => this.isPlaying))
      .subscribe((nextPosition: FiguresMovement) => {
        if (nextPosition === FiguresMovement.LEFT) {
          if (this.checkCollisionDetection(-1, this.currentFigure)) {
            this.figurePosition -= 1;
            this.redrawBoard();
          }
        }
        if (nextPosition === FiguresMovement.RIGHT) {
          if (this.checkCollisionDetection(1, this.currentFigure)) {
            this.figurePosition += 1;
            this.redrawBoard();
          }
        }
        if (nextPosition === FiguresMovement.ROTATE) {
          const rotateFigure = this.rotateFigure(this.currentFigure);
          if (this.checkCollisionDetection(0, rotateFigure)) {
            this.currentFigure = rotateFigure;
            this.redrawBoard();
          }
        }
        if (nextPosition === FiguresMovement.DOWN) {
          this.stopGame();
          this.duration = ACCELERATION;
          this.playGame();
        }
        if (nextPosition === FiguresMovement.DOWN_OFF) {
          this.stopGame();
          this.duration =
            DELAY_DEFAULT - DELAY_LEVEL_STEP * this.currentLevel > MAX_SPEED
              ? DELAY_DEFAULT - DELAY_LEVEL_STEP * this.currentLevel
              : MAX_SPEED;
          this.playGame();
        }

        this.sendStatsToSocket();
      });

    this.subscriptionNext = this.gameService
      .onNewFigureCreated()
      .subscribe(({ previousFigure }) => {
        this.currentFigure = previousFigure;
        this.lineWithFigure = 0;
        this.figurePosition = CENTRAL_ITEM;
      });

    this.subscriptionLevel = this.gameService
      .onUpdateGameInformation()
      .pipe(
        tap((gameStats) => {
          this.gameInformation = gameStats;
          this.sendStatsToSocket();
        }),
        filter((gameStats) => this.currentLevel !== gameStats.level),
      )
      .subscribe((gameStats) => {
        this.stopGame();

        this.currentLevel = gameStats.level;
        this.duration =
          DELAY_DEFAULT - DELAY_LEVEL_STEP * this.currentLevel > MAX_SPEED
            ? DELAY_DEFAULT - DELAY_LEVEL_STEP * this.currentLevel
            : MAX_SPEED;

        if (this.isPlaying && !this.isLostGame) {
          this.playGame();
        }
      });
    this.redrawBoard();
  }

  ngOnDestroy(): void {
    this.detectDestruction();
    this.subscriptionState.unsubscribe();
    this.subscriptionMove.unsubscribe();
    this.subscriptionNext.unsubscribe();
    this.subscriptionLevel.unsubscribe();
    this.subscriptionLogout.unsubscribe();
    this.subscriptionLogin.unsubscribe();
    this.subscriptionResize.unsubscribe();
  }

  private setCanvasSize(): void {
    this.blockSize = this.resizeService.blockSize;
    this.canvas.nativeElement.width = QUANTITY_BLOCKS_WIDTH * this.blockSize;
    this.canvas.nativeElement.height = QUANTITY_BLOCKS_HEIGHT * this.blockSize;
  }

  private sendStatsToSocket(): void {
    if (this.userIsAuthenticated) {
      this.socketService.changeGameStats({
        player: this.currentPlayer,
        matrix: this.currentMatrix,
        // eslint-disable-next-line no-nested-ternary
        gameStatus: this.isLostGame
          ? GameState.LOST
          : this.isPlaying
          ? GameState.PLAY
          : GameState.PAUSE,
        gameInformation: this.gameInformation,
      });
    }
  }

  private detectDestruction(): void {
    if (this.isLostGame) {
      this.setInitialBoardState();
      this.gameService.setInitialInformation();
    }

    if (this.isPlaying !== undefined && !this.isLostGame) {
      this.saveGameStatsAndInformation();
      this.gameService.setSavedInformation(this.gameInformation);
    }
    this.stopGame();
  }

  private saveGameStatsAndInformation(): void {
    localStorage.setItem(
      LocalStorage.GAME_STATS,
      JSON.stringify({
        boardMatrix: this.boardMatrix,
        currentFigure: this.currentFigure,
        currentMatrix: this.currentMatrix,
        figurePosition: this.figurePosition,
        duration: this.duration,
        lineWithFigure: this.lineWithFigure - 1 >= 0 ? this.lineWithFigure - 1 : 0,
      }),
    );
    localStorage.setItem(LocalStorage.GAME_INFORMATION, JSON.stringify(this.gameInformation));
  }

  private rotateFigure(figureMatrix: FiguresColors[][]): FiguresColors[][] {
    const reverseMatrix = [...figureMatrix].reverse();
    return reverseMatrix[0].map((item, index) => reverseMatrix.map((line) => line[index]));
  }

  private redrawBoard(): void {
    const newFigure = new FigureModel();
    const newBoard = new BoardModel(this.ctx, false);

    this.currentMatrix = newFigure.showFigure(
      this.lineWithFigure,
      this.currentFigure,
      this.boardMatrix,
      this.figurePosition,
    );

    newBoard.drawBoard(this.currentMatrix, this.blockSize);
  }

  private setInitialBoardState(): void {
    this.lineWithFigure = 0;
    this.figurePosition = CENTRAL_ITEM;
    this.duration = DELAY_DEFAULT;
  }

  private setInitialComponentState(): void {
    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.duration = DELAY_DEFAULT;
    this.currentLevel = 1;
    this.gameService.updateFigures();
  }

  private playGame(): void {
    this.timeInterval = interval(this.duration).subscribe(() => {
      const noCollision = this.checkCollisionDetection(0, this.currentFigure);
      if (this.userIsAuthenticated) {
        this.socketService.createNewSpectateGame({
          player: this.currentPlayer,
          level: this.currentLevel,
        });
      }
      if (noCollision) {
        this.takeMoveDown();
      } else if (!noCollision && !this.lineWithFigure) {
        this.lostGame();
      } else {
        this.deleteFilledLines();
      }
      this.sendStatsToSocket();
    });
  }

  private checkCollisionDetection(step: number, figure: FiguresColors[][]): boolean {
    return figure.every((line, indexY) => {
      return line.every((block, indexX) => {
        if (block === FiguresColors.DEFAULT) {
          return true;
        }
        const x = this.figurePosition + indexX + step;
        const y = this.lineWithFigure + indexY;
        if (x >= 0 && x <= QUANTITY_BLOCKS_WIDTH && y < QUANTITY_BLOCKS_HEIGHT) {
          return this.boardMatrix[y][x] === FiguresColors.DEFAULT;
        }
        return false;
      });
    });
  }

  private deleteFilledLines(): void {
    const filledLineIndexes = BoardModel.findFilledLine(
      this.currentFigure,
      this.currentMatrix,
      this.lineWithFigure,
    );
    if (filledLineIndexes.length > 0) {
      this.gameService.setNumberFilledLines(filledLineIndexes.length);
      filledLineIndexes.forEach((number) => {
        this.currentMatrix.splice(this.lineWithFigure - 1 + number, 1);
        this.currentMatrix.unshift(new Array(QUANTITY_BLOCKS_WIDTH).fill(FiguresColors.DEFAULT));
      });
    }
    this.boardMatrix = this.currentMatrix;
    this.gameService.updateFigures();
    this.redrawBoard();
    this.lineWithFigure = 0;
    this.figurePosition = CENTRAL_ITEM;
  }

  private takeMoveDown(): void {
    this.redrawBoard();
    this.lineWithFigure += 1;
  }

  private stopGame(): void {
    if (this.timeInterval) {
      this.timeInterval.unsubscribe();
    }
  }

  private resetGame(): void {
    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    localStorage.removeItem(LocalStorage.GAME_STATS);
    localStorage.removeItem(LocalStorage.NEXT_FIGURE);
    localStorage.removeItem(LocalStorage.GAME_INFORMATION);
    this.gameService.updateFigures();
    this.gameService.updateFigures();
    this.redrawBoard();
    this.stopGame();
    this.setInitialBoardState();
    this.playGame();
  }

  private lostGame(): void {
    this.stopGame();
    this.setInitialBoardState();
    this.redrawBoard();
    this.isLostGame = true;
    this.sendStatsToSocket();
    this.isPlaying = false;

    this.gameService.setLostGame();

    if (this.userIsAuthenticated) {
      this.gameService.sendResult().subscribe(() => {
        this.toastrService.warning('You have successfully added your result to Leaderboard');
      });
    }

    this.gameService.updateFigures();
    localStorage.removeItem(LocalStorage.GAME_STATS);
    localStorage.removeItem(LocalStorage.NEXT_FIGURE);
    localStorage.removeItem(LocalStorage.GAME_INFORMATION);

    this.textStateOverlay = GameState.LOST;
    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );

    if (this.userIsAuthenticated) {
      this.socketService.deleteSpectateGame(this.currentPlayer.username);
    }
  }
}
