import { Component, HostListener } from '@angular/core';
import { GameMovementService } from '../../services/game-movement.service';
import { FiguresMovement } from '../../enums/figures-movement.enum';

@Component({
  selector: 'atg-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss'],
})
export class GameControlsComponent {
  constructor(private gameMovementService: GameMovementService) {}

  @HostListener('window:keydown', ['$event']) keyBoardInput(event: KeyboardEvent): void {
    switch (event.code) {
      case 'ArrowRight':
        this.gameMovementService.setMoveStep(FiguresMovement.RIGHT);
        break;
      case 'ArrowLeft':
        this.gameMovementService.setMoveStep(FiguresMovement.LEFT);
        break;
      case 'ArrowUp':
        this.gameMovementService.setMoveStep(FiguresMovement.ROTATE);
        break;
      default:
        break;
    }
  }
}
