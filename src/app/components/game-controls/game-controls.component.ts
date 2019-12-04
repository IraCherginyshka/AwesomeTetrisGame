import { Component, HostListener } from '@angular/core';
import { GameService } from '../../services/game.service';
import { FiguresMovement } from '../../enums/figures-movement.enum';

@Component({
  selector: 'atg-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss'],
})
export class GameControlsComponent {
  public moveStep = FiguresMovement;
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
      case 'ArrowDown':
        this.gameService.setMoveStep(FiguresMovement.DOWN);
        break;
      default:
        break;
    }
  }

  @HostListener('window:keyup', ['$event']) keyBoardUp(event: KeyboardEvent): void {
    event.preventDefault();
    if (event.code === 'ArrowDown') {
      this.gameService.setMoveStep(FiguresMovement.DOWN_OFF);
    }
  }

  public moveFigure(step: FiguresMovement): void {
    this.gameService.setMoveStep(step);
  }
}
