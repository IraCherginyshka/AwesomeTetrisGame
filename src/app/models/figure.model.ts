import { FiguresColors } from '../enums/figures-colors.enum';

export class FigureModel {
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
