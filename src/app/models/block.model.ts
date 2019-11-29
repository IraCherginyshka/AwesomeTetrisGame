import { BLOCK_SIZE, BORDER_COLOR } from '../constants/board-component.const';

export abstract class BlockModel {
  constructor(protected ctx: CanvasRenderingContext2D, private color: string) {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = BORDER_COLOR;
  }

  fillBoardBlock(x: number, y: number): void {
    this.ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  }
}
