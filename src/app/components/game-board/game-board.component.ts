import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GameMovementService } from '../../services/game-movement.service';
import { FigureModel } from '../../models/figure.model';
import { BlockModel } from '../../models/block.model';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { GameStateService } from '../../services/game-state.service';
import { GameState } from '../../enums/game-state.enum';
import {
  QUANTITY_BLOCKS_WIDTH,
  QUANTITY_BLOCKS_HEIGHT,
  DELAY_FIRST_LEVEL,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CENTRAL_ITEM,
} from '../../constants/board-component.const';

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
    this.play();
    this.subscriptionState = this.gameStateService
      .getGameState()
      .subscribe((gameState: GameState) => {
        if (gameState === GameState.RESET) {
          this.reset();
        }
        if (gameState === GameState.PAUSE) {
          this.pause();
        }
      });

    this.subscriptionMove = this.gameMovementService
      .onNextStep()
      .pipe(
        map((value) => value + this.figurePosition),
        filter((nextPosition) => nextPosition >= 0 && nextPosition <= QUANTITY_BLOCKS_WIDTH),
      )
      .subscribe((nextPosition: number) => {
        this.figurePosition = nextPosition;
      });
  }

  ngOnDestroy(): void {
    this.subscriptionState.unsubscribe();
    this.subscriptionMove.unsubscribe();
  }

  static makeBoardEmptyMatrix(width: number, height: number): FiguresColors[][] {
    return new Array(height).fill(new Array(width).fill(FiguresColors.DEFAULT));
  }

  private drawBoard(matrix: FiguresColors[][]): void {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => new BlockModel(this.ctx, item).fillBoardBlock(indexX, indexY));
    });
  }

  private play(): void {
    this.lineWithFigure = 0;
    this.figurePosition = CENTRAL_ITEM;
    this.lineWithFigure = 0;
    const newFigure = new FigureModel();
    const itemHeight = newFigure.figureMatrix.length;

    this.timeInterval = window.setInterval(() => {
      this.drawBoard(
        newFigure.showFigure(this.lineWithFigure, this.boardMatrix, this.figurePosition),
      );
      if (this.lineWithFigure + itemHeight === QUANTITY_BLOCKS_HEIGHT) {
        clearInterval(this.timeInterval);
        this.play();
      } else {
        this.lineWithFigure += 1;
      }
    }, DELAY_FIRST_LEVEL);
  }

  private pause(): void {
    clearInterval(this.timeInterval);
  }

  private reset(): void {
    clearInterval(this.timeInterval);
    this.play();
  }
}
