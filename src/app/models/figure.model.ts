import { CENTRAL_ITEM } from '../constants/board-component.const';
import { FiguresColors } from '../enums/figures-colors.enum';

export class FigureModel {
  public figureMatrix = [
    [FiguresColors.FIRST, FiguresColors.FIRST],
    [FiguresColors.FIRST, FiguresColors.FIRST],
  ];

  showFigure(height: number, boardMatrix: FiguresColors[][]): FiguresColors[][] {
    const matrixWithFigure = [...boardMatrix];
    let figureLine = 0;
    for (let i = height; i < this.figureMatrix.length + height; i++) {
      const lineWithFigure = [...boardMatrix[i]];
      lineWithFigure.splice(
        CENTRAL_ITEM,
        this.figureMatrix[figureLine].length,
        ...this.figureMatrix[figureLine],
      );
      matrixWithFigure[i] = lineWithFigure.slice();
      figureLine += 1;
    }
    return matrixWithFigure;
  }
}
