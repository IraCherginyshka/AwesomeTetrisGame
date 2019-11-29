import { FiguresColors } from '../enums/figures-colors.enum';
import { FiguresMatrixConst } from '../constants/figures-matrix.const';

export class FigureModel {
  public static getRandomFigure(): FiguresColors[][] {
    return FiguresMatrixConst[Math.floor(Math.random() * FiguresMatrixConst.length)];
  }
  public showFigure(
    height: number,
    figureMatrix: FiguresColors[][],
    boardMatrix: FiguresColors[][],
    figurePosition: number,
  ): FiguresColors[][] {
    const matrixWithFigure = [...boardMatrix];

    figureMatrix.forEach((line, index) => {
      let activePosition = 0;
      let hasActiveBlock = false;
      const activeBlocksLine = line.filter((block, ind) => {
        if (block !== FiguresColors.DEFAULT && !hasActiveBlock) {
          activePosition = ind;
          hasActiveBlock = true;
        }
        return block !== FiguresColors.DEFAULT;
      });
      if (hasActiveBlock) {
        const targetLine = [...boardMatrix[index + height]];
        targetLine.splice(
          figurePosition + activePosition,
          activeBlocksLine.length,
          ...activeBlocksLine,
        );
        matrixWithFigure[index + height] = [...targetLine];
      }
    });
    return matrixWithFigure;
  }
}
