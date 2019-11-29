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
      const targetLine = [...boardMatrix[index + height]];
      targetLine.splice(figurePosition, line.length, ...line);
      matrixWithFigure[index + height] = [...targetLine];
    });
    return matrixWithFigure;
  }
}
