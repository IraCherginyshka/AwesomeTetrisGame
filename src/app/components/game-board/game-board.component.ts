import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameMovementService } from '../../services/game-movement.service';
import { FigureModel } from '../../models/figure.model';
import { BlockModel } from '../../models/block.model';
import {
  QUANTITY_BLOCKS_WIDTH,
  QUANTITY_BLOCKS_HEIGHT,
  DELAY_FIRST_LEVEL,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CENTRAL_ITEM,
} from '../../constants/board-component.const';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';

@Component({
  selector: 'atg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private boardMatrix: FiguresColors[][];
  private subscriptionMove: Subscription;
  private figurePosition: number;

  constructor(private gameMovementService: GameMovementService) {}

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.boardMatrix = GameBoardComponent.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.play();
    this.subscriptionMove = this.gameMovementService
      .getMoveStep()
      .subscribe((gameMove: FiguresMovement) => {
        if (
          this.figurePosition + gameMove >= 0 &&
          this.figurePosition + gameMove <= QUANTITY_BLOCKS_WIDTH
        ) {
          this.figurePosition += gameMove;
        }
      });
  }

  private static makeBoardEmptyMatrix(width: number, height: number): FiguresColors[][] {
    return new Array(height).fill(new Array(width).fill(FiguresColors.DEFAULT));
  }

  private play(): void {
    let height = 0;
    this.figurePosition = CENTRAL_ITEM;
    const newFigure = new FigureModel();
    const itemHeight = newFigure.figureMatrix.length;
    const interval = setInterval(() => {
      this.drawBoard(newFigure.showFigure(height, this.boardMatrix, this.figurePosition));
      if (height + itemHeight === QUANTITY_BLOCKS_HEIGHT) {
        clearInterval(interval);
        this.play();
      }
      height += 1;
    }, DELAY_FIRST_LEVEL);
  }

  private drawBoard(matrix: FiguresColors[][]): void {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => new BlockModel(this.ctx, item).fillBoardBlock(indexX, indexY));
    });
  }
}
