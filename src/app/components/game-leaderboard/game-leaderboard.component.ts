import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { GameResult } from '../../models/game-result.model';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { LEADERBOARD_MAX_WIDTH } from '../../constants/game-information.const';

@Component({
  selector: 'atg-game-leaderboard',
  templateUrl: './game-leaderboard.component.html',
  styleUrls: ['./game-leaderboard.component.scss'],
})
export class GameLeaderboardComponent implements OnInit {
  public gameResults: GameResult[];
  public currentPlayerName: string | null;
  public isCurrentPlayerNotInTop: boolean;
  public currentPlayerNotInTop: GameResult;
  public currentPlayerIndex: number;

  constructor(private gameService: GameService, private userService: UserService) {
    this.currentPlayerName = this.userService.getUserName();
  }

  ngOnInit(): void {
    this.gameService.getPlayerGameResult().subscribe((results) => {
      this.gameResults = results.slice(0, LEADERBOARD_MAX_WIDTH);

      if (this.currentPlayerName) {
        this.currentPlayerIndex = results.findIndex(
          ({ username }) => username === this.currentPlayerName,
        );
        this.isCurrentPlayerNotInTop = this.currentPlayerIndex > LEADERBOARD_MAX_WIDTH;
        if (this.isCurrentPlayerNotInTop) {
          this.currentPlayerNotInTop = results[this.currentPlayerIndex];
        }
      }
    });

    this.userService
      .getAuthListener()
      .pipe(filter((user) => !user))
      .subscribe(() => {
        this.isCurrentPlayerNotInTop = false;
        this.currentPlayerName = null;
      });
  }
}
