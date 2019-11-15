import { FIGURE_SIZE, BORDER_COLOR } from '../constants/board-component-constants';

export default class BlockModel {
  constructor(private ctx: CanvasRenderingContext2D, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = BORDER_COLOR;
  }

  fillBoardBlock(x: number, y: number) {
    this.ctx.fillRect(x * FIGURE_SIZE, y * FIGURE_SIZE, FIGURE_SIZE, FIGURE_SIZE);
    this.ctx.strokeRect(x * FIGURE_SIZE, y * FIGURE_SIZE, FIGURE_SIZE, FIGURE_SIZE);
  }
}
