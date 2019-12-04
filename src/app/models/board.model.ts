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
    return figure
      .map((item, index) =>
        board[lineIndex - 1 + index].every((block) => block !== FiguresColors.DEFAULT) ? index : -1,
      )
      .filter((index) => index !== -1);
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
