import { Subscription } from 'rxjs';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';
import { GameState } from '../../enums/game-state.enum';
import { ControlsEnum } from '../../enums/controls.enum';
import { DefaultSettings } from '../../enums/default-settings.enum';
import { LocalStorage } from '../../enums/local-storage.enum';
import { ControlsStateObject } from '../../interfaces/controls-state.interface';

@Component({
  selector: 'atg-game-state-controls',
  templateUrl: './game-state-controls.component.html',
  styleUrls: ['./game-state-controls.component.scss'],
})
export class GameStateControlsComponent implements OnInit, OnDestroy {
  public isPlaying: boolean;

  private subscriptionState: Subscription;
  private subscriptionLost: Subscription;
  private controls: Partial<ControlsStateObject>;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.subscriptionLost = this.gameService.onLostGame().subscribe(() => {
      this.isPlaying = false;
    });

    this.subscriptionState = this.gameService.getGameState().subscribe((action: GameState) => {
      this.isPlaying = action !== GameState.PAUSE;
    });

    const savedControls = JSON.parse(localStorage.getItem(LocalStorage.CONTROLS));

    if (savedControls) {
      this.controls = savedControls;
    } else {
      this.controls = {
        [ControlsEnum.RESET]: DefaultSettings.RESET,
        [ControlsEnum.PAUSE]: DefaultSettings.PAUSE,
        [ControlsEnum.PLAY]: DefaultSettings.PLAY,
      };
    }
  }

  ngOnDestroy(): void {
    this.subscriptionState.unsubscribe();
  }

  @HostListener('window:keydown', ['$event']) keyBoardInput(event: KeyboardEvent): void {
    event.preventDefault();
    switch (event.key) {
      case this.controls[ControlsEnum.PAUSE]:
        this.pauseGame();
        break;
      case this.controls[ControlsEnum.RESET]:
        this.resetGame();
        break;
      case this.controls[ControlsEnum.PLAY]:
        this.playGame();
        break;
      default:
        break;
    }
  }

  public resetGame(): void {
    this.gameService.setInitialInformation();
    this.gameService.setGameState(GameState.RESET);
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
