import { BLOCK_SIZE, BORDER_COLOR } from '../constants/board-component.const';

export class BlockModel {
  constructor(private ctx: CanvasRenderingContext2D, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = BORDER_COLOR;
  }

  fillBoardBlock(x: number, y: number): void {
    this.ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  }
}
