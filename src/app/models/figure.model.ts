import { CENTRAL_ITEM } from '../constants/board-component.const';
import { FiguresColors } from '../enums/figures-colors.enum';

export class FigureModel {
  public figureMatrix = [
    [FiguresColors.FIRST, FiguresColors.FIRST],
    [FiguresColors.FIRST, FiguresColors.FIRST],
  ];

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
