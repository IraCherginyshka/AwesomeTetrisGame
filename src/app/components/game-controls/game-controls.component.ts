import { Subscription } from 'rxjs';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';
import { ControlsStateObject } from '../../interfaces/controls-state.interface';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameState } from '../../enums/game-state.enum';
import { ControlsEnum } from '../../enums/controls.enum';
import { DefaultSettings } from '../../enums/default-settings.enum';
import { LocalStorage } from '../../enums/local-storage.enum';

@Component({
  selector: 'atg-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss'],
})
export class GameControlsComponent implements OnInit, OnDestroy {
  public moveStep = FiguresMovement;

  private isPlaying: boolean;
  private isLostGame: boolean;
  private subscriptionState: Subscription;
  private subscriptionLost: Subscription;
  private controls: Partial<ControlsStateObject>;
  private readonly figureMovement = FiguresMovement;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.subscriptionState = this.gameService.getGameState().subscribe((gameState: GameState) => {
      this.isPlaying = gameState !== GameState.PAUSE;
      this.isLostGame = false;
    });

    this.subscriptionLost = this.gameService.onLostGame().subscribe(() => {
      this.isLostGame = true;
    });

    const savedControls = JSON.parse(localStorage.getItem(LocalStorage.CONTROLS));

    if (savedControls) {
      this.controls = savedControls;
    } else {
      this.controls = {
        [ControlsEnum.ROTATE]: DefaultSettings.ROTATE,
        [ControlsEnum.LEFT]: DefaultSettings.LEFT,
        [ControlsEnum.DROP]: DefaultSettings.DROP,
        [ControlsEnum.RIGHT]: DefaultSettings.RIGHT,
      };
    }
  }

  ngOnDestroy(): void {
    this.subscriptionLost.unsubscribe();
    this.subscriptionState.unsubscribe();
  }

  @HostListener('window:keydown', ['$event']) keyBoardInput(event: KeyboardEvent): void {
    if (!this.isPlaying || this.isLostGame) {
      return;
    }
    event.preventDefault();
    switch (event.key) {
      case this.controls[ControlsEnum.RIGHT]:
        this.gameService.setMoveStep(FiguresMovement.RIGHT);
        break;
      case this.controls[ControlsEnum.LEFT]:
        this.gameService.setMoveStep(FiguresMovement.LEFT);
        break;
      case this.controls[ControlsEnum.ROTATE]:
        this.gameService.setMoveStep(FiguresMovement.ROTATE);
        break;
      case this.controls[ControlsEnum.DROP]:
        this.gameService.setMoveStep(FiguresMovement.DOWN);
        break;
      default:
        break;
    }
  }

  @HostListener('window:keyup', ['$event']) keyBoardUp(event: KeyboardEvent): void {
    if (!this.isPlaying || this.isLostGame) {
      return;
    }
    event.preventDefault();
    if (event.key === this.controls[ControlsEnum.DROP]) {
      this.gameService.setMoveStep(FiguresMovement.DOWN_OFF);
    }
  }
}
