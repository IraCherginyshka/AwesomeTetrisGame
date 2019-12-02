import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FiguresMovement } from '../enums/figures-movement.enum';
import { GameState } from '../enums/game-state.enum';
import { FigureModel } from '../models/figure.model';
import { FiguresColors } from '../enums/figures-colors.enum';

@Injectable({ providedIn: 'root' })
export class GameService {
  private isPlaying = false;
  private currentFigure: FiguresColors[][];
  private nextFigure = FigureModel.getRandomFigure();
  private movementSubject = new Subject<FiguresMovement>();
  private gameStateSubject = new Subject<GameState>();
  private nextFigureSubject = new Subject<{
    previousFigure: FiguresColors[][];
    randomNextFigure: FiguresColors[][];
  }>();

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
    const previousFigure = this.currentFigure;
    const randomNextFigure = FigureModel.getRandomFigure();
    this.nextFigure = randomNextFigure;
    this.nextFigureSubject.next({
      previousFigure,
      randomNextFigure,
    });
  }

  public onNewFigureCreated(): Observable<{
    previousFigure: FiguresColors[][];
    randomNextFigure: FiguresColors[][];
  }> {
    return this.nextFigureSubject.asObservable();
  }
}
