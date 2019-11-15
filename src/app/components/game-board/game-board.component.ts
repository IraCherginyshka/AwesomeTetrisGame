import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FigureModel } from '../../models/figure.model';
import { BlockModel } from '../../models/block.model';
import { QUANTITY_BLOCKS_WIDTH, QUANTITY_BLOCKS_HEIGHT, DELAY_FIRST_LEVEL } from '../../constants/board-component.const';

@Component({
  selector: 'atg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  private canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  private boardMatrix: any[];

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.boardMatrix = this.makeBoardEmptyMatrix(QUANTITY_BLOCKS_WIDTH, QUANTITY_BLOCKS_HEIGHT);
    this.play();
  }

  makeBoardEmptyMatrix(width, height) {
    let lineNumber = height;
    const matrix = [];
    while (lineNumber !== 0) {
      matrix.push(new Array(width).fill(0));
      lineNumber--;
    }
    return matrix;
  }

  drawBoard(matrix) {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => {
        if (!item) {
          const block = new BlockModel(this.ctx, 'darkblue');
          block.fillBoardBlock(indexX, indexY);
        } else {
          const block = new BlockModel(this.ctx, 'red');
          block.fillBoardBlock(indexX, indexY);
        }
      });
    });
  }

  play() {
    let height = 0;
    const newFigure = new FigureModel();
    const { figureMatrix } = newFigure;

    const interval = setInterval(() => {
      this.drawBoard(newFigure.showFigure(height, this.boardMatrix));
      if (height + figureMatrix.length === 20) {
        clearInterval(interval);
        this.play();
      }
      height += 1;
    }, DELAY_FIRST_LEVEL);
  }
}
