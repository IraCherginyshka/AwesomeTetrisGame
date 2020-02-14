import { interval, Subscription } from 'rxjs';
import { Directive, HostListener, Input } from '@angular/core';

import { GameService } from '../services/game.service';
import { FiguresMovement } from '../enums/figures-movement.enum';
import { LONG_PRESS_SPEED, LONG_PRESS_SPEED_ROTATE } from '../constants/board-component.const';

@Directive({
  selector: '[atgLongPress]',
})
export class LongPressDirective {
  @Input('move') moveStep: FiguresMovement;

  private interval: Subscription;

  constructor(private gameService: GameService) {}

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  startPress(): void {
    this.gameService.setMoveStep(this.moveStep);

    const updateInterval =
      this.moveStep === FiguresMovement.ROTATE ? LONG_PRESS_SPEED_ROTATE : LONG_PRESS_SPEED;

    this.interval = interval(updateInterval).subscribe(() => {
      this.gameService.setMoveStep(this.moveStep);
    });
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  endPress(): void {
    if (this.moveStep === FiguresMovement.DOWN) {
      this.gameService.setMoveStep(FiguresMovement.DOWN_OFF);
    }
    if (this.interval) {
      this.interval.unsubscribe();
    }
  }
}
