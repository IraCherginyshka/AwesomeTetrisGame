import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FiguresMovement } from '../enums/figures-movement.enum';
import { GameState } from '../enums/game-state.enum';

@Injectable({ providedIn: 'root' })
export class GameService {
  public isPlaying = false;
  private movementSubject = new Subject<FiguresMovement>();
  private gameStateSubject = new Subject<GameState>();

  public setMoveStep(step: FiguresMovement): void {
    if (this.isPlaying) {
      this.movementSubject.next(step);
    }
  }

  public onNextStep(): Observable<FiguresMovement> {
    return this.movementSubject.asObservable();
  }

  public setGameState(action: GameState): void {
    this.isPlaying = action !== GameState.PAUSE;
    this.gameStateSubject.next(action);
  }

  public getGameState(): Observable<GameState> {
    return this.gameStateSubject.asObservable();
  }
}
