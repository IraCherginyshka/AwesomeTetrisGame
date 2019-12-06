import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FiguresMovement } from '../enums/figures-movement.enum';
import { GameState } from '../enums/game-state.enum';
import { FigureModel } from '../models/figure.model';
import { FiguresColors } from '../enums/figures-colors.enum';

@Injectable({ providedIn: 'root' })
export class GameService {
  private isPlaying = false;
  private isLostGame = false;
  private currentFigure: FiguresColors[][];
  private nextFigure = FigureModel.getRandomFigure();
  private movementSubject = new Subject<FiguresMovement>();
  private gameStateSubject = new Subject<GameState>();
  private nextFigureSubject = new Subject<{
    previousFigure: FiguresColors[][];
    randomNextFigure: FiguresColors[][];
  }>();
  private numberLinesSubject = new Subject<{
    lines: number;
    score: number;
  }>();
  private lostGameSubject = new Subject<boolean>();

  public setLostGame(): void {
    this.isLostGame = true;
    this.lostGameSubject.next();
  }

  public onLostGame(): Observable<boolean> {
    return this.lostGameSubject.asObservable();
  }

  public setMoveStep(step: FiguresMovement): void {
    if (this.isPlaying && !this.isLostGame) {
      this.movementSubject.next(step);
    }
  }

  public onNextStep(): Observable<FiguresMovement> {
    return this.movementSubject.asObservable();
  }

  public setGameState(action: GameState): void {
    this.isPlaying = action !== GameState.PAUSE;
    this.isLostGame = false;
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

  public setNumberFilledLines(lines: number): void {
    const score = lines * 2;
    this.numberLinesSubject.next({ lines, score });
  }

  public setInitialInformation(): void {
    this.numberLinesSubject.next({ lines: 0, score: 0 });
  }

  public onUpdateNumberLines(): Observable<{
    lines: number;
    score: number;
  }> {
    return this.numberLinesSubject.asObservable();
  }
}
