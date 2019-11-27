import { Component, HostListener } from '@angular/core';
import { GameService } from '../../services/game.service';
import { FiguresMovement } from '../../enums/figures-movement.enum';

@Component({
  selector: 'atg-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss'],
})
export class GameControlsComponent {
  constructor(private gameService: GameService) {}

  @HostListener('window:keydown', ['$event']) keyBoardInput(event: KeyboardEvent): void {
    event.preventDefault();
    switch (event.code) {
      case 'ArrowRight':
        this.gameService.setMoveStep(FiguresMovement.RIGHT);
        break;
      case 'ArrowLeft':
        this.gameService.setMoveStep(FiguresMovement.LEFT);
        break;
      case 'ArrowUp':
        this.gameService.setMoveStep(FiguresMovement.ROTATE);
        break;
      default:
        break;
    }
  }
}
