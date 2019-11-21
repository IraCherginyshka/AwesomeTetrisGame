import { FiguresColors } from '../enums/figures-colors.enum';
import { FiguresMatrixConst } from '../constants/figures-matrix.const';

export class FigureModel {
  public figureMatrix: FiguresColors[][];

  constructor() {
    this.figureMatrix = FigureModel.getRandomFigure();
  }

  public showFigure(
    height: number,
    boardMatrix: FiguresColors[][],
    figurePosition: number,
  ): FiguresColors[][] {
    const matrixWithFigure = [...boardMatrix];

    this.figureMatrix.forEach((line, index) => {
      const targetLine = [...boardMatrix[index + height]];
      targetLine.splice(figurePosition, line.length, ...line);
      matrixWithFigure[index + height] = [...targetLine];
    });
    return matrixWithFigure;
  }

  private static getRandomFigure(): FiguresColors[][] {
    return FiguresMatrixConst[Math.floor(Math.random() * FiguresMatrixConst.length)];
  }
}
