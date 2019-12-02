import { BlockModel } from './block.model';
import { BLOCK_SIZE } from '../constants/board-component.const';
import { FiguresColors } from '../enums/figures-colors.enum';

export class NextBlockModel extends BlockModel {
  protected fillStroke(x: number, y: number): void {
    if (this.ctx.fillStyle !== FiguresColors.DEFAULT) {
      this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
  }
}
