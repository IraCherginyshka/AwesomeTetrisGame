import { FiguresColors } from '../enums/figures-colors.enum';
import { NextBlockModel } from './next-block.model';
import { GameBlockModel } from './game-block.model';

export class BoardModel {
  constructor(private ctx: CanvasRenderingContext2D, private isNextFigure: boolean) {}

  static makeBoardEmptyMatrix(width: number, height: number): FiguresColors[][] {
    return new Array(height).fill(new Array(width).fill(FiguresColors.DEFAULT));
  }

  static findFilledLine(
    figure: FiguresColors[][],
    board: FiguresColors[][],
    lineIndex: number,
  ): number[] {
    const indexes: number[] = [];
    figure.forEach((line, index) => {
      const isFilledLine = board[lineIndex - 1 + index].every(
        (block) => block !== FiguresColors.DEFAULT,
      );
      if (isFilledLine) {
        indexes.push(index);
      }
    });
    return indexes;
  }

  public drawBoard(matrix: FiguresColors[][]): void {
    matrix.forEach((line, indexY) => {
      line.forEach((item, indexX) => {
        (this.isNextFigure
          ? new NextBlockModel(this.ctx, item)
          : new GameBlockModel(this.ctx, item)
        ).fillBoardBlock(indexX, indexY);
      });
    });
  }
}
