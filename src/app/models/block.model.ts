import { BORDER_COLOR } from '../constants/board-component.const';

export abstract class BlockModel {
  constructor(protected ctx: CanvasRenderingContext2D, private color: string) {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = BORDER_COLOR;
  }

  fillBoardBlock(x: number, y: number, z: number): void {
    this.ctx.fillRect(x * z, y * z, z, z);
    this.fillStroke(x, y, z);
  }

  protected abstract fillStroke(x: number, y: number, z: number): void;
}
