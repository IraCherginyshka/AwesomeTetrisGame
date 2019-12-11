import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FiguresMovement } from '../enums/figures-movement.enum';
import { GameState } from '../enums/game-state.enum';
import { FigureModel } from '../models/figure.model';
import { FiguresColors } from '../enums/figures-colors.enum';
import {
  DEFAULT_LINE_SCORE,
  DEFAULT_STEP,
  GAME_STEP_LEVEL,
} from '../constants/game-information.const';
import { GameStatsObject } from '../interfaces/gameStats.interface';

@Injectable({ providedIn: 'root' })
export class GameService {
  private isPlaying = false;
  private isLostGame = false;
  private currentFigure: FiguresColors[][];
  private nextFigure = FigureModel.getRandomFigure();
  private currentLevel = 1;
  private currentNumberLines = 0;
  private currentScore = 0;
  private movementSubject = new Subject<FiguresMovement>();
  private gameStateSubject = new Subject<GameState>();
  private nextFigureSubject = new Subject<{
    previousFigure: FiguresColors[][];
    randomNextFigure: FiguresColors[][];
  }>();
  private numberLinesSubject = new BehaviorSubject({
    lines: 0,
    score: 0,
    level: 1,
  });
  private lostGameSubject = new Subject<boolean>();

  public static calculateScore(lines: number, level: number): number {
    return (
      (lines / 2) *
      (2 * (DEFAULT_LINE_SCORE + DEFAULT_LINE_SCORE * level) + DEFAULT_STEP * (lines - 1))
    );
  }

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

  public setNumberFilledLines(numberLines: number): void {
    const initialScore = numberLines * DEFAULT_STEP;
    this.currentNumberLines = numberLines ? this.currentNumberLines + numberLines : numberLines;
    this.currentScore = initialScore
      ? this.currentScore + GameService.calculateScore(numberLines, this.currentLevel)
      : initialScore;
    if (this.currentNumberLines >= GAME_STEP_LEVEL * this.currentLevel) {
      this.currentLevel += 1;
    }

    const lines = this.currentNumberLines;
    const score = this.currentScore;
    const level = this.currentLevel;

    this.numberLinesSubject.next({ lines, score, level });
  }

  public setInitialInformation(): void {
    this.currentLevel = 1;
    this.currentScore = 0;
    this.currentNumberLines = 0;

    const lines = this.currentNumberLines;
    const score = this.currentScore;
    const level = this.currentLevel;
    this.numberLinesSubject.next({ lines, score, level });
  }

  public onUpdateGameInformation(): Observable<GameStatsObject> {
    return this.numberLinesSubject.asObservable();
  }
}
