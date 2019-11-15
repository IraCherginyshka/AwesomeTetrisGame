import { CENTRAL_ITEM } from '../constants/board-component.const';

export class FigureModel {
  public figureMatrix = [[1, 1], [1, 1]];

  showFigure(height: number, boardMatrix: any[]): any[] {
    const matrixWithFigure = boardMatrix.slice();
    let figureLine = 0;
    for (let i = height; i < this.figureMatrix.length + height; i++) {
      const lineWithFigure = boardMatrix[i].slice();
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
