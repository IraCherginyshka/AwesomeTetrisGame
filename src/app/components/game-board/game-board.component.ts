import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../services/game.service';
import { FigureModel } from '../../models/figure.model';
import { BlockModel } from '../../models/block.model';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameState } from '../../enums/game-state.enum';
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CENTRAL_ITEM,
  DELAY_FIRST_LEVEL,
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
  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private boardMatrix: FiguresColors[][];
  private subscriptionState: Subscription;
  private subscriptionMove: Subscription;
  private figurePosition: number;
  private timeInterval: number;
  private lineWithFigure: number;
  private currentFigure: FiguresColors[][];
  private currentMatrix: FiguresColors[][];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.boardMatrix = GameBoardComponent.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.setInitialBoardState();

    this.subscriptionState = this.gameService.getGameState().subscribe((gameState: GameState) => {
      this.isPlaying = this.gameService.isPlaying;
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
          }
        }
        if (nextPosition === FiguresMovement.RIGHT) {
          if (this.checkCollisionDetection(1, this.currentFigure)) {
            this.figurePosition += 1;
          }
        }
        if (nextPosition === FiguresMovement.ROTATE) {
          const rotateFigure = this.rotateFigure(this.currentFigure);
          if (this.checkCollisionDetection(0, rotateFigure)) {
            this.currentFigure = rotateFigure;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptionState.unsubscribe();
    this.subscriptionMove.unsubscribe();
  }

  private static makeBoardEmptyMatrix(width: number, height: number): FiguresColors[][] {
    return new Array(height).fill(new Array(width).fill(FiguresColors.DEFAULT));
  }

  private drawBoard(matrix: FiguresColors[][]): void {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => new BlockModel(this.ctx, item).fillBoardBlock(indexX, indexY));
    });
  }

  private rotateFigure(figureMatrix: FiguresColors[][]): FiguresColors[][] {
    const reverseMatrix = [...figureMatrix];
    reverseMatrix.reverse();
    return reverseMatrix[0].map((item, index) => reverseMatrix.map((line) => line[index]));
  }

  private setInitialBoardState(): void {
    this.lineWithFigure = 0;
    this.figurePosition = CENTRAL_ITEM;
    this.lineWithFigure = 0;
    this.currentFigure = FigureModel.getRandomFigure();
  }

  private playGame(): void {
    const newFigure = new FigureModel();

    this.timeInterval = window.setInterval(() => {
      if (this.checkCollisionDetection(0, this.currentFigure)) {
        this.currentMatrix = newFigure.showFigure(
          this.lineWithFigure,
          this.currentFigure,
          this.boardMatrix,
          this.figurePosition,
        );
        this.drawBoard(this.currentMatrix);
        this.lineWithFigure += 1;
      } else {
        this.boardMatrix = this.currentMatrix;
        this.setInitialBoardState();
      }
    }, DELAY_FIRST_LEVEL);
  }

  private checkCollisionDetection(step: number, figure: FiguresColors[][]): boolean {
    return figure.every((line, indexY) => {
      return line.every((block, indexX) => {
        if (block !== FiguresColors.DEFAULT) {
          const x = this.figurePosition + indexX + step;
          const y = this.lineWithFigure + indexY;
          if (x >= 0 && x <= QUANTITY_BLOCKS_WIDTH && y < QUANTITY_BLOCKS_HEIGHT) {
            return this.boardMatrix[y][x] === FiguresColors.DEFAULT;
          }
          return false;
        }
        return true;
      });
    });
  }

  private stopGame(): void {
    clearInterval(this.timeInterval);
  }

  private resetGame(): void {
    clearInterval(this.timeInterval);
    this.setInitialBoardState();
    this.boardMatrix = GameBoardComponent.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.playGame();
  }
}
