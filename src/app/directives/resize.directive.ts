import { Directive, HostListener } from '@angular/core';
import {
  BLOCK_SIZE,
  BLOCK_SIZE_MOBILE,
  BREAKPOINT_TABLET,
} from '../constants/board-component.const';
import { ResizeService } from '../services/resize.service';

@Directive({
  selector: '[atgResize]',
})
export class ResizeDirective {
  private blockSize: number;

  constructor(private resizeService: ResizeService) {
    this.setBlockSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event']) onResize({ target }: { target: Window }): void {
    this.setBlockSize(target.innerWidth);
  }

  private setBlockSize(width: number): void {
    const size = this.blockSize;

    if (width > BREAKPOINT_TABLET) {
      this.blockSize = BLOCK_SIZE;
    } else {
      this.blockSize = BLOCK_SIZE_MOBILE;
    }

    if (size !== this.blockSize) {
      this.resizeService.setBlockSize(this.blockSize);
    }
  }
}
