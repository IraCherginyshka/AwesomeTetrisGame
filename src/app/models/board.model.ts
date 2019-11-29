import { FiguresColors } from '../enums/figures-colors.enum';
import { NextBlockModel } from './next-block.model';
import { GameBlockModel } from './game-block.model';

export class BoardModel {
  constructor(private ctx: CanvasRenderingContext2D, private isNextFigure: boolean) {}

  static makeBoardEmptyMatrix(width: number, height: number): FiguresColors[][] {
    return new Array(height).fill(new Array(width).fill(FiguresColors.DEFAULT));
  }

  public drawBoard(matrix: FiguresColors[][]): void {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => {
        if (this.isNextFigure) {
          return new NextBlockModel(this.ctx, item).fillBoardBlock(indexX, indexY);
        }
        return new GameBlockModel(this.ctx, item).fillBoardBlock(indexX, indexY);
      });
    });
  }
}
