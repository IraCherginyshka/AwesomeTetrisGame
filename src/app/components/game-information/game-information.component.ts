import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';
import { GameStatsObject } from '../../interfaces/game-stats.interface';
import { LocalStorage } from '../../enums/local-storage.enum';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'atg-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss'],
})
export class GameInformationComponent implements OnInit {
  public gameStats$: Observable<GameStatsObject>;
  public isCustomControls = !!localStorage.getItem(LocalStorage.CONTROLS);
  public spectatorList: string[] = [];

  private subscriptionJoinedUser: Subscription;
  private subscriptionDisconnectedUser: Subscription;

  constructor(private gameService: GameService, private socketService: SocketService) {
    this.gameStats$ = this.gameService.onUpdateGameInformation();
  }

  ngOnInit(): void {
    this.subscriptionJoinedUser = this.socketService.getJoinedUser().subscribe((user) => {
      this.spectatorList.push(user);
    });

    this.subscriptionDisconnectedUser = this.socketService
      .getDisconnectedUser()
      .subscribe((user) => {
        this.spectatorList = this.spectatorList.filter((username) => username !== user);
      });
  }
}
