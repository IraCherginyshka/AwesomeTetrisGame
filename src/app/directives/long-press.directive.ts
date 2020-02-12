import { Directive, HostListener, Input } from '@angular/core';

import { GameService } from '../services/game.service';
import { FiguresMovement } from '../enums/figures-movement.enum';

@Directive({
  selector: '[atgLongPress]',
})
export class LongPressDirective {
  @Input('move') moveStep: FiguresMovement;

  private interval: number;

  constructor(private gameService: GameService) {}

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  startPress(event: Event): void {
    this.gameService.setMoveStep(this.moveStep);

    if (this.moveStep === FiguresMovement.ROTATE) {
      this.interval = window.setInterval(() => {
        this.gameService.setMoveStep(FiguresMovement.ROTATE);
      }, 250);
    } else {
      this.interval = window.setInterval(() => {
        this.gameService.setMoveStep(this.moveStep);
      }, 125);
    }
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  endPress(): void {
    if (this.moveStep === FiguresMovement.DOWN) {
      this.gameService.setMoveStep(FiguresMovement.DOWN_OFF);
    }
    clearInterval(this.interval);
  }
}
