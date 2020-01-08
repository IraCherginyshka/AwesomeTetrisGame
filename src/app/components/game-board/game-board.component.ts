import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { GameService } from '../../services/game.service';
import { FigureModel } from '../../models/figure.model';
import { BoardModel } from '../../models/board.model';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameState } from '../../enums/game-state.enum';
import {
  QUANTITY_BLOCKS_WIDTH,
  QUANTITY_BLOCKS_HEIGHT,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CENTRAL_ITEM,
  ACCELERATION,
  DELAY_DEFAULT,
  DELAY_LEVEL_STEP,
  MAX_SPEED,
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
  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private boardMatrix: FiguresColors[][];
  private currentFigure: FiguresColors[][];
  private currentMatrix: FiguresColors[][];
  private figurePosition: number;
  private timeInterval: number;
  private duration: number;
  private lineWithFigure: number;
  private currentLevel: number;
  private subscriptionState: Subscription;
  private subscriptionMove: Subscription;
  private subscriptionNext: Subscription;
  private subscriptionLevel: Subscription;

  constructor(private gameService: GameService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');

    if (localStorage.getItem('game_stats')) {
      const {
        boardMatrix,
        currentFigure,
        currentMatrix,
        figurePosition,
        duration,
        lineWithFigure,
      } = JSON.parse(localStorage.getItem('game_stats'));
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
      this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
        QUANTITY_BLOCKS_WIDTH,
        QUANTITY_BLOCKS_HEIGHT,
      );
      this.duration = DELAY_DEFAULT;
      this.currentLevel = 1;
      this.gameService.updateFigures();
    }
    this.isLostGame = false;
    this.isPlaying = undefined;

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
      }
      if (gameState === GameState.PLAY) {
        this.playGame();
      }
    });

    this.subscriptionMove = this.gameService
      .onNextStep()
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
      });

    this.subscriptionNext = this.gameService
      .onNewFigureCreated()
      .subscribe(({ previousFigure }) => {
        this.currentFigure = previousFigure;
        this.setInitialBoardState();
      });

    this.subscriptionLevel = this.gameService
      .onUpdateGameInformation()
      .pipe(filter((gameStats) => this.currentLevel !== gameStats.level))
      .subscribe(({ level }) => {
        this.stopGame();
        this.currentLevel = level;
        this.duration =
          DELAY_DEFAULT - DELAY_LEVEL_STEP * this.currentLevel > MAX_SPEED
            ? DELAY_DEFAULT - DELAY_LEVEL_STEP * this.currentLevel
            : MAX_SPEED;
        if (this.isPlaying) {
          this.playGame();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.isLostGame) {
      this.setInitialBoardState();
      this.gameService.setInitialInformation();
    }

    if (this.isPlaying !== undefined && !this.isLostGame) {
      localStorage.setItem(
        'game_stats',
        JSON.stringify({
          boardMatrix: this.boardMatrix,
          currentFigure: this.currentFigure,
          currentMatrix: this.currentMatrix,
          figurePosition: this.figurePosition,
          duration: this.duration,
          lineWithFigure: this.lineWithFigure,
        }),
      );
    }
    this.stopGame();
    this.subscriptionState.unsubscribe();
    this.subscriptionMove.unsubscribe();
    this.subscriptionNext.unsubscribe();
    this.subscriptionLevel.unsubscribe();
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

    newBoard.drawBoard(this.currentMatrix);
  }

  private setInitialBoardState(): void {
    this.lineWithFigure = 0;
    this.figurePosition = CENTRAL_ITEM;
    this.duration = DELAY_DEFAULT;
  }

  private playGame(): void {
    const noCollision = this.checkCollisionDetection(0, this.currentFigure);
    this.timeInterval = window.setInterval(() => {
      if (noCollision) {
        this.takeMoveDown();
      } else if (!noCollision && !this.lineWithFigure) {
        this.lostGame();
      } else {
        this.deleteFilledLines();
      }
    }, this.duration);
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
    this.setInitialBoardState();
  }

  private takeMoveDown(): void {
    this.redrawBoard();
    this.lineWithFigure += 1;
  }

  private stopGame(): void {
    clearInterval(this.timeInterval);
  }

  private resetGame(): void {
    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    localStorage.removeItem('game_stats');
    localStorage.removeItem('next_figure');
    this.gameService.updateFigures();
    this.gameService.updateFigures();
    this.redrawBoard();
    this.stopGame();
    this.setInitialBoardState();
    this.playGame();
  }

  private lostGame(): void {
    this.redrawBoard();
    this.isLostGame = true;
    this.isPlaying = false;
    this.gameService.setLostGame().subscribe(() => {
      this.toastrService.warning('You have successfully added your result to Leaderboard');
    });
    this.gameService.updateFigures();
    this.setInitialBoardState();
    localStorage.removeItem('game_stats');
    localStorage.removeItem('next_figure');
    this.stopGame();
    this.textStateOverlay = GameState.LOST;
    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
  }
}
