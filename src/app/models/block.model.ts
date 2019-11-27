import { BLOCK_SIZE, BORDER_COLOR } from '../constants/board-component.const';
import { FiguresColors } from '../enums/figures-colors.enum';

export class BlockModel {
  constructor(private ctx: CanvasRenderingContext2D, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = BORDER_COLOR;
  }

  fillBoardBlock(x: number, y: number, nextFigure: boolean): void {
    this.ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    if (nextFigure) {
      if (this.ctx.fillStyle !== FiguresColors.DEFAULT) {
        this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    } else {
      this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
  }
}
