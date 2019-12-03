import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../services/game.service';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameState } from '../../enums/game-state.enum';

@Component({
  selector: 'atg-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss'],
})
export class GameControlsComponent implements OnInit, OnDestroy {
  private isPlaying: boolean;
  private isLostGame: boolean;
  private subscriptionState: Subscription;
  private subscriptionLost: Subscription;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.subscriptionState = this.gameService.getGameState().subscribe((gameState: GameState) => {
      this.isPlaying = gameState !== GameState.PAUSE;
      this.isLostGame = false;
    });

    this.subscriptionLost = this.gameService.onLostGame().subscribe((value) => {
      this.isLostGame = true;
    });
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
    if (!this.isPlaying || this.isLostGame) {
      return;
    }
    event.preventDefault();
    if (event.code === 'ArrowDown') {
      this.gameService.setMoveStep(FiguresMovement.DOWN_OFF);
    }
  }
}
