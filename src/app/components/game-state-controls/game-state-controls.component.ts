import { Component } from '@angular/core';
import { GameState } from '../../enums/game-state.enum';

import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'atg-game-state-controls',
  templateUrl: './game-state-controls.component.html',
  styleUrls: ['./game-state-controls.component.scss'],
})
export class GameStateControlsComponent {
  constructor(private gameStateService: GameStateService) {}

  public resetGame(): void {
    this.gameStateService.setGameState(GameState.RESET);
  }

  public pauseGame(): void {
    this.gameStateService.setGameState(GameState.PAUSE);
  }
}
