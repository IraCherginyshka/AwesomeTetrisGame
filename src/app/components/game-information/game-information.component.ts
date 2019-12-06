import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../services/game.service';
import {
  DEFAULT_LINE_SCORE,
  DEFAULT_STEP,
  GAME_LEVEL,
} from '../../constants/game-information.const';

@Component({
  selector: 'atg-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss'],
})
export class GameInformationComponent implements OnInit, OnDestroy {
  public numberLines: number;
  public currentScore: number;
  public currentLevel: number;
  private subscriptionLines: Subscription;

  constructor(private gameService: GameService) {}

  public static calculationScore(lines: number, level: number): number {
    return (
      (lines / 2) *
      (2 * (DEFAULT_LINE_SCORE + DEFAULT_LINE_SCORE * level) + DEFAULT_STEP * (lines - 1))
    );
  }
  ngOnInit(): void {
    this.numberLines = 0;
    this.currentScore = 0;
    this.currentLevel = GAME_LEVEL;
    this.subscriptionLines = this.gameService
      .onUpdateNumberLines()
      .subscribe(({ lines, score }) => {
        this.numberLines = lines ? this.numberLines + lines : lines;
        this.currentScore = score
          ? this.currentScore + GameInformationComponent.calculationScore(lines, this.currentLevel)
          : score;
      });
  }

  ngOnDestroy(): void {
    this.subscriptionLines.unsubscribe();
  }
}
