import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FigureModel } from '../../models/figure.model';
import { BlockModel } from '../../models/block.model';
import { QUANTITY_BLOCKS_WIDTH, QUANTITY_BLOCKS_HEIGHT, DELAY_FIRST_LEVEL, CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants/board-component.const';
import { FiguresColors } from '../../enums/figures-colors.enum';

@Component({
  selector: 'atg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private boardMatrix: any[];

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.boardMatrix = this.makeBoardEmptyMatrix(QUANTITY_BLOCKS_WIDTH, QUANTITY_BLOCKS_HEIGHT);
    this.play();
  }

  makeBoardEmptyMatrix(width: number, height: number): FiguresColors[][] {
    return new Array(height).fill(new Array(width).fill(FiguresColors.DEFAULT));
  }

  play(): void {
    let height = 0;
    const newFigure = new FigureModel();
    const itemHeight = newFigure.figureMatrix.length;
    const interval = setInterval(() => {
      this.drawBoard(newFigure.showFigure(height, this.boardMatrix));
      if (height + itemHeight === QUANTITY_BLOCKS_HEIGHT) {
        clearInterval(interval);
        this.play();
      }
      height += 1;
    }, DELAY_FIRST_LEVEL);
  }

  private drawBoard(matrix: FiguresColors[][]): void {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => {
        if (item === FiguresColors.DEFAULT) {
          const block = new BlockModel(this.ctx, FiguresColors.DEFAULT);
          block.fillBoardBlock(indexX, indexY);
        } else {
          const block = new BlockModel(this.ctx, item);
          block.fillBoardBlock(indexX, indexY);
        }
      });
    });
  }
}
