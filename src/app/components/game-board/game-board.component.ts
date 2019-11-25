import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameMovementService } from '../../services/game-movement.service';
import { GameStateService } from '../../services/game-state.service';
import { FigureModel } from '../../models/figure.model';
import { BlockModel } from '../../models/block.model';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameState } from '../../enums/game-state.enum';
import {
  QUANTITY_BLOCKS_WIDTH,
  QUANTITY_BLOCKS_HEIGHT,
  DELAY_FIRST_LEVEL,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CENTRAL_ITEM,
} from '../../constants/board-component.const';
import { FiguresMatrixConst } from '../../constants/figures-matrix.const';

@Component({
  selector: 'atg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private boardMatrix: FiguresColors[][];
  private subscriptionState: Subscription;
  private subscriptionMove: Subscription;
  private figurePosition: number;
  private timeInterval: number;
  private lineWithFigure: number;
  private currentFigure: FiguresColors[][];

  constructor(
    private gameStateService: GameStateService,
    private gameMovementService: GameMovementService,
  ) {}

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.boardMatrix = GameBoardComponent.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.setInitialBoardState();

    this.subscriptionState = this.gameStateService
      .getGameState()
      .subscribe((gameState: GameState) => {
        if (gameState === GameState.RESET) {
          this.resetGame();
        }
        if (gameState === GameState.PAUSE) {
          this.stopGame();
        }
      });

    this.subscriptionMove = this.gameMovementService
      .onNextStep()
      .subscribe((nextPosition: string) => {
        if (nextPosition === FiguresMovement.LEFT) {
          this.figurePosition -= 1;
        }
        if (nextPosition === FiguresMovement.RIGHT) {
          this.figurePosition += 1;
        }
        if (nextPosition === FiguresMovement.ROTATE) {
          this.currentFigure = this.rotateFigure(this.currentFigure);
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

  private static getRandomFigure(): FiguresColors[][] {
    return FiguresMatrixConst[Math.floor(Math.random() * FiguresMatrixConst.length)];
  }

  private drawBoard(matrix: FiguresColors[][]): void {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => new BlockModel(this.ctx, item).fillBoardBlock(indexX, indexY));
    });
  }

  private rotateFigure(figureMatrix: FiguresColors[][]): FiguresColors[][] {
    figureMatrix.reverse();
    return figureMatrix[0].map((item, index) => figureMatrix.map((line) => line[index]));
  }

  private setInitialBoardState(): void {
    this.lineWithFigure = 0;
    this.figurePosition = CENTRAL_ITEM;
    this.lineWithFigure = 0;
    this.currentFigure = GameBoardComponent.getRandomFigure();
  }

  private playGame(): void {
    const newFigure = new FigureModel();
    this.timeInterval = window.setInterval(() => {
      this.drawBoard(
        newFigure.showFigure(
          this.lineWithFigure,
          this.currentFigure,
          this.boardMatrix,
          this.figurePosition,
        ),
      );
      if (this.lineWithFigure + this.currentFigure.length === QUANTITY_BLOCKS_HEIGHT) {
        this.setInitialBoardState();
      } else {
        this.lineWithFigure += 1;
      }
    }, DELAY_FIRST_LEVEL);
  }

  private stopGame(): void {
    clearInterval(this.timeInterval);
  }

  private resetGame(): void {
    clearInterval(this.timeInterval);
    this.setInitialBoardState();
    this.playGame();
  }
}
