import { BLOCK_SIZE } from '../constants/board-component.const';
import { BlockModel } from './block.model';

export class GameBlockModel extends BlockModel {
  protected fillStroke(x: number, y: number): void {
    this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  }
}
