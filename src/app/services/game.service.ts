import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FiguresMovement } from '../enums/figures-movement.enum';
import { GameState } from '../enums/game-state.enum';
import { FigureModel } from '../models/figure.model';

@Injectable({ providedIn: 'root' })
export class GameService {
  public isPlaying = false;
  public currentFigure = FigureModel.getRandomFigure();
  public nextFigure = FigureModel.getRandomFigure();

  private movementSubject = new Subject<FiguresMovement>();
  private gameStateSubject = new Subject<GameState>();
  private nextFigureSubject = new Subject<void>();

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

  public updateFigures(): void {
    this.currentFigure = this.nextFigure;
    this.nextFigure = FigureModel.getRandomFigure();
    this.nextFigureSubject.next();
  }

  public onUpdateFigures(): Observable<void> {
    return this.nextFigureSubject.asObservable();
  }
}
