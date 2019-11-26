import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameState } from '../../enums/game-state.enum';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'atg-game-state-controls',
  templateUrl: './game-state-controls.component.html',
  styleUrls: ['./game-state-controls.component.scss'],
})
export class GameStateControlsComponent implements OnInit, OnDestroy {
  public isPlaying: boolean;
  private subscriptionState: Subscription;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.subscriptionState = this.gameService.getGameState().subscribe(() => {
      this.isPlaying = this.gameService.isPlaying;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionState.unsubscribe();
  }

  public resetGame(): void {
    this.gameService.setGameState(GameState.RESET);
  }

  public pauseGame(): void {
    this.gameService.setGameState(GameState.PAUSE);
  }

  public playGame(): void {
    this.gameService.setGameState(GameState.PLAY);
  }
}
