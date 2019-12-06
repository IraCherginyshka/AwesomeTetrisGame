import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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
  private subscriptionLost: Subscription;
  private codeKeys: object;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.subscriptionLost = this.gameService.onLostGame().subscribe(() => {
      this.isPlaying = false;
    });

    this.subscriptionState = this.gameService.getGameState().subscribe((action: GameState) => {
      this.isPlaying = action !== GameState.PAUSE;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionState.unsubscribe();
  }

  @HostListener('window:keydown', ['$event']) keyBoardInput(event: KeyboardEvent): void {
    event.preventDefault();
    switch (event.code) {
      case 'KeyP':
        this.pauseGame();
        break;
      case 'KeyR':
        this.resetGame();
        break;
      case 'Enter':
        this.playGame();
        break;
      default:
        break;
    }
  }

  public resetGame(): void {
    this.gameService.setGameState(GameState.RESET);
    this.gameService.setInitialInformation();
  }

  public pauseGame(): void {
    this.gameService.setGameState(GameState.PAUSE);
  }

  public playGame(): void {
    if (this.isPlaying) {
      return;
    }
    this.gameService.setGameState(GameState.PLAY);
  }
}
