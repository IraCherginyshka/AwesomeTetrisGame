import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SocketService } from '../../services/socket.service';
import { UserService } from '../../services/user.service';
import { ObservePlayerDataInterface } from '../../interfaces/observe-player-data.interface';

@Component({
  selector: 'atg-game-observe',
  templateUrl: './game-observe.component.html',
  styleUrls: ['./game-observe.component.scss'],
})
export class GameObserveComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  public currentUserName: string;
  public activeGames: ObservePlayerDataInterface[];

  private subscriptionNewGame: Subscription;

  constructor(
    private socketService: SocketService,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
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
    if (!this.currentUserName) {
      this.toastrService.error('Please, log in to view the game.', '', {
        timeOut: 3000,
      });
    } else {
      this.router.navigate([`/spectate/game/`], { queryParams: { room: gameRoom } });
    }
  }
}
