import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../services/socket.service';
import { UserService } from '../../services/user.service';
import { ObservePlayerDataInterface } from '../../interfaces/observe-player-data.interface';

@Component({
  selector: 'atg-game-observe',
  templateUrl: './game-observe.component.html',
  styleUrls: ['./game-observe.component.scss'],
})
export class GameObserveComponent implements OnInit {
  public currentUserName: string;
  public activeGames: ObservePlayerDataInterface[];

  private subscriptionNewGame: Subscription;

  constructor(private socketService: SocketService, private userService: UserService) {}

  ngOnInit(): void {
    this.currentUserName = this.userService.getUserName();

    this.subscriptionNewGame = this.socketService
      .getSpectateGames()
      .pipe(map((games) => games.filter((game) => game.player.username !== this.currentUserName)))
      .subscribe((games: ObservePlayerDataInterface[]) => {
        this.activeGames = games;
      });
  }

  ngOnDestroy(): void {
    this.subscriptionNewGame.unsubscribe();
  }

  public connectToSpectateGame(gameRoom: string): void {
    this.socketService.connectToSpectateGame(gameRoom, this.currentUserName);
  }
}
