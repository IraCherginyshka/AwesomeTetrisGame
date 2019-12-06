import { FiguresColors } from '../enums/figures-colors.enum';
import { FiguresMatrixConst } from '../constants/figures-matrix.const';
import { QUANTITY_BLOCKS_HEIGHT } from '../constants/board-component.const';

export class FigureModel {
  public static getRandomFigure(): FiguresColors[][] {
    return FiguresMatrixConst[Math.floor(Math.random() * FiguresMatrixConst.length)];
  }
  public showFigure(
    lineHeight: number,
    figureMatrix: FiguresColors[][],
    boardMatrix: FiguresColors[][],
    figurePosition: number,
  ): FiguresColors[][] {
    const matrixWithFigure = [...boardMatrix];

    figureMatrix.forEach((line, indexLine) => {
      let activePosition = 0;
      let hasActiveBlock = false;
      if (indexLine + lineHeight < QUANTITY_BLOCKS_HEIGHT) {
        const targetLine = [...boardMatrix[indexLine + lineHeight]];

        const activeBlocksLine = line.filter((block, blockPosition) => {
          if (block !== FiguresColors.DEFAULT && !hasActiveBlock) {
            activePosition = blockPosition;
            hasActiveBlock = true;
          }
          return block !== FiguresColors.DEFAULT;
        });

        targetLine.splice(
          figurePosition + activePosition,
          activeBlocksLine.length,
          ...activeBlocksLine,
        );

        matrixWithFigure[indexLine + lineHeight] = [...targetLine];
      }
    });

    return matrixWithFigure;
  }
}
