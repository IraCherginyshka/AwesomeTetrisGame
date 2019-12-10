import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.isLostGame = false;
    this.isPlaying = true;
    this.gameService.updateFigures();
    this.duration = DELAY_DEFAULT;
    this.currentLevel = 1;

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
          clearInterval(this.timeInterval);
          this.duration = DELAY_DEFAULT / ACCELERATION;
          this.playGame();
        }

        if (nextPosition === FiguresMovement.DOWN_OFF) {
          clearInterval(this.timeInterval);
          this.duration = DELAY_DEFAULT - DELAY_LEVEL_STEP * this.currentLevel;
          this.playGame();
        }
      });

    this.subscriptionNext = this.gameService
      .onNewFigureCreated()
      .subscribe(({ previousFigure }) => {
        this.currentFigure = previousFigure;
        this.setInitialBoardState();
      });

    this.subscriptionLevel = this.gameService.onUpdateGameInformation().subscribe(({ level }) => {
      if (this.currentLevel !== level) {
        clearInterval(this.timeInterval);
        this.currentLevel = level;
        this.duration = DELAY_DEFAULT - DELAY_LEVEL_STEP * this.currentLevel;
        this.playGame();
      }
    });

    this.gameService.updateFigures();
  }

  ngOnDestroy(): void {
    this.subscriptionState.unsubscribe();
    this.subscriptionMove.unsubscribe();
    this.subscriptionNext.unsubscribe();
    this.subscriptionLevel.unsubscribe();
  }

  private rotateFigure(figureMatrix: FiguresColors[][]): FiguresColors[][] {
    const reverseMatrix = [...figureMatrix];
    reverseMatrix.reverse();
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
    this.timeInterval = window.setInterval(() => {
      if (this.checkCollisionDetection(0, this.currentFigure)) {
        this.redrawBoard();
        this.lineWithFigure += 1;
      } else if (
        !this.checkCollisionDetection(0, this.currentFigure) &&
        this.lineWithFigure === 0
      ) {
        this.redrawBoard();
        this.lostGame();
      } else {
        this.deleteFilledLines();
        this.boardMatrix = this.currentMatrix;
        this.gameService.updateFigures();
        this.redrawBoard();
        this.setInitialBoardState();
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
  }

  private stopGame(): void {
    clearInterval(this.timeInterval);
  }

  private resetGame(): void {
    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.gameService.updateFigures();
    this.redrawBoard();
    clearInterval(this.timeInterval);
    this.setInitialBoardState();
    this.playGame();
  }

  private lostGame(): void {
    this.isLostGame = true;
    this.isPlaying = false;
    this.gameService.setLostGame();
    this.gameService.updateFigures();
    this.setInitialBoardState();
    clearInterval(this.timeInterval);

    this.textStateOverlay = GameState.LOST;

    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
  }
}
