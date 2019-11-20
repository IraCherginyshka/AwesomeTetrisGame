import { FiguresColors } from '../enums/figures-colors.enum';
import { BlockModel } from './block.model';

export class MatrixModel {
  constructor(private ctx: CanvasRenderingContext2D) {}

  public static makeBoardEmptyMatrix(width: number, height: number): FiguresColors[][] {
    return new Array(height).fill(new Array(width).fill(FiguresColors.DEFAULT));
  }

  public drawBoard(matrix: FiguresColors[][]): void {
    return matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => new BlockModel(this.ctx, item).fillBoardBlock(indexX, indexY));
    });
  }
}
