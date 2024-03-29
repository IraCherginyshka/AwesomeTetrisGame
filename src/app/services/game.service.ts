import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { FiguresMovement } from '../enums/figures-movement.enum';
import { GameState } from '../enums/game-state.enum';
import { FigureModel } from '../models/figure.model';
import { FiguresColors } from '../enums/figures-colors.enum';
import {
  DEFAULT_LINE_SCORE,
  DEFAULT_STEP,
  GAME_STEP_LEVEL,
} from '../constants/game-information.const';
import { GameStatsObject } from '../interfaces/game-stats.interface';
import { GameResult } from '../models/game-result.model';
import { environment } from '../../environments/environment';
import { LocalStorage } from '../enums/local-storage.enum';

@Injectable({ providedIn: 'root' })
export class GameService {
  private endpoint = environment.url;
  private isPlaying = false;
  private isLostGame = false;
  private currentFigure: FiguresColors[][];
  private nextFigure =
    JSON.parse(localStorage.getItem(LocalStorage.NEXT_FIGURE)) || FigureModel.getRandomFigure();
  private currentLevel = 0;
  private currentNumberLines = 0;
  private currentScore = 0;
  private movementSubject = new Subject<FiguresMovement>();
  private gameStateSubject = new Subject<GameState>();
  private nextFigureSubject = new Subject<{
    previousFigure: FiguresColors[][];
    randomNextFigure: FiguresColors[][];
  }>();
  private numberLinesSubject: BehaviorSubject<GameStatsObject>;
  private lostGameSubject = new Subject<boolean>();

  constructor(private http: HttpClient, public router: Router) {
    const savedInformation = JSON.parse(localStorage.getItem(LocalStorage.GAME_INFORMATION));
    if (savedInformation) {
      this.currentLevel = savedInformation.level;
      this.currentScore = savedInformation.score;
      this.currentNumberLines = savedInformation.lines;
    }
    const initialInformation = { lines: 0, score: 0, level: 0 };

    this.numberLinesSubject = new BehaviorSubject(savedInformation || initialInformation);
  }

  public static calculateScore(lines: number, level: number): number {
    return (
      (lines / 2) *
      (2 * (DEFAULT_LINE_SCORE + DEFAULT_LINE_SCORE * (level + 1)) + DEFAULT_STEP * lines)
    );
  }

  public setLostGame(): void {
    this.isLostGame = true;
    this.lostGameSubject.next();
  }

  public sendResult(): Observable<object> {
    const gameResult: GameResult = {
      username: localStorage.getItem(LocalStorage.USER_NAME),
      lines: this.currentNumberLines,
      score: this.currentScore,
      level: this.currentLevel,
    };
    return this.http.post(`${this.endpoint}/add_result`, gameResult);
  }

  public getPlayerGameResult(): Observable<GameResult[]> {
    return this.http
      .get(`${this.endpoint}/result`)
      .pipe(map((data: GameResult[]) => data.map((el) => new GameResult(el))));
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
    const previousNumberLines = this.currentNumberLines;
    const previousScore = this.currentScore;

    this.currentNumberLines = previousNumberLines + numberLines;
    this.currentScore = previousScore + GameService.calculateScore(numberLines, this.currentLevel);

    if (this.currentNumberLines >= GAME_STEP_LEVEL * (this.currentLevel + 1)) {
      this.currentLevel += 1;
    }

    const lines = this.currentNumberLines;
    const score = this.currentScore;
    const level = this.currentLevel;

    this.numberLinesSubject.next({ lines, score, level });
  }

  public setInitialInformation(): void {
    this.currentLevel = 0;
    this.currentScore = 0;
    this.currentNumberLines = 0;

    const lines = this.currentNumberLines;
    const score = this.currentScore;
    const level = this.currentLevel;
    this.numberLinesSubject.next({ lines, score, level });
  }

  public setSavedInformation({ lines, score, level }: GameStatsObject): void {
    this.currentLevel = level;
    this.currentScore = score;
    this.currentNumberLines = lines;
    this.numberLinesSubject.next({ lines, score, level });
  }

  public onUpdateGameInformation(): Observable<GameStatsObject> {
    return this.numberLinesSubject.asObservable();
  }
}
