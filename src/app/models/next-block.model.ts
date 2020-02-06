import { BlockModel } from './block.model';
import { FiguresColors } from '../enums/figures-colors.enum';

export class NextBlockModel extends BlockModel {
  protected fillStroke(x: number, y: number, z: number): void {
    if (this.ctx.fillStyle !== FiguresColors.DEFAULT) {
      this.ctx.strokeRect(x * z, y * z, z, z);
    }
  }
}
