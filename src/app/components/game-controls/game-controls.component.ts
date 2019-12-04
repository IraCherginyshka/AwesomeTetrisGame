import { Component, HostListener } from '@angular/core';
import { GameService } from '../../services/game.service';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameState } from '../../enums/game-state.enum';

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
      case 'ArrowDown':
        this.gameService.setMoveStep(FiguresMovement.DOWN);
        break;
      case 'KeyP':
        this.gameService.setGameState(GameState.PAUSE);
        break;
      case 'KeyR':
        this.gameService.setGameState(GameState.RESET);
        break;
      case 'Enter':
        this.gameService.setGameState(GameState.PLAY);
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
}
