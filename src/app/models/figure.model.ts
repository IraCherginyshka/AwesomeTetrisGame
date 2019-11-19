import { CENTRAL_ITEM } from '../constants/board-component.const';
import { FiguresColors } from '../enums/figures-colors.enum';
import { FiguresMatrixConst } from '../constants/figures-matrix.const';

export class FigureModel {
  public figureMatrix = FiguresMatrixConst[Math.floor(Math.random() * FiguresMatrixConst.length)];

  showFigure(height: number, boardMatrix: FiguresColors[][]): FiguresColors[][] {
    const matrixWithFigure = [...boardMatrix];

    this.figureMatrix.forEach((line, index) => {
      const targetLine = [...boardMatrix[index + height]];
      targetLine.splice(CENTRAL_ITEM, line.length, ...line);
      matrixWithFigure[index + height] = [...targetLine];
    });
    return matrixWithFigure;
  }
}
