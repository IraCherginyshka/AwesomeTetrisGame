import { FiguresColors } from '../enums/figures-colors.enum';
import { BlockModel } from './block.model';

export class BoardModel {
  constructor(private ctx: CanvasRenderingContext2D) {}

  static makeBoardEmptyMatrix(width: number, height: number): FiguresColors[][] {
    return new Array(height).fill(new Array(width).fill(FiguresColors.DEFAULT));
  }

  public drawBoard(matrix: FiguresColors[][], nextFigure: boolean): void {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) =>
        new BlockModel(this.ctx, item).fillBoardBlock(indexX, indexY, nextFigure),
      );
    });
  }
}
