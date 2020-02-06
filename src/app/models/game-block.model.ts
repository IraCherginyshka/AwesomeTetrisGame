import { BlockModel } from './block.model';

export class GameBlockModel extends BlockModel {
  protected fillStroke(x: number, y: number, z: number): void {
    this.ctx.strokeRect(x * z, y * z, z, z);
  }
}
