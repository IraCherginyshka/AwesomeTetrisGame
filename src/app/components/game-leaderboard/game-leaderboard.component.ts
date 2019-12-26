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
  public currentPlayerPlace: number;

  constructor(private gameService: GameService, private userService: UserService) {
    this.currentPlayerName = this.userService.getUserName();
  }

  ngOnInit(): void {
    this.gameService.getPlayerGameResult().subscribe((results) => {
      this.gameResults = results.slice(0, LEADERBOARD_MAX_WIDTH);
      this.currentPlayerPlace = results.findIndex(
        (player) => player.username === this.currentPlayerName,
      );
      this.isCurrentPlayerNotInTop = this.currentPlayerPlace > LEADERBOARD_MAX_WIDTH;
      if (this.isCurrentPlayerNotInTop) {
        this.currentPlayerNotInTop = results[this.currentPlayerPlace];
      }
    });

    this.userService.getAuthListener().subscribe((user) => {
      if (!user) {
        this.isCurrentPlayerNotInTop = false;
        this.currentPlayerName = null;
      }
    });
  }
}
