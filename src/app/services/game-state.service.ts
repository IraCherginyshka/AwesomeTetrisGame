import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { GameState } from '../enums/game-state.enum';

@Injectable({ providedIn: 'root' })
export class GameStateService {
  private gameStateSubject = new Subject<GameState>();

  public setGameState(action: GameState): void {
    this.gameStateSubject.next(action);
  }
  public getGameState(): Observable<GameState> {
    return this.gameStateSubject.asObservable();
  }
}
