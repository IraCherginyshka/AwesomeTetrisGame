import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SocketService } from '../../services/socket.service';
import { UserService } from '../../services/user.service';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants/board-component.const';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { GameState } from '../../enums/game-state.enum';
import { GameStatsObject } from '../../interfaces/game-stats.interface';
import { PlayerData } from '../../interfaces/player-data.interface';
import { BoardModel } from '../../models/board.model';

@Component({
  selector: 'atg-game-other-player',
  templateUrl: './game-other-player.component.html',
  styleUrls: ['./game-other-player.component.scss'],
})
export class GameOtherPlayerComponent implements OnInit, OnDestroy {
  public gameStatus: GameState;
  public gameInformation: GameStatsObject;
  public player: PlayerData;
  public age: number;

  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  @ViewChild('spectate_canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private currentMatrix: FiguresColors[][];
  private currentUser: string;
  private activeGames: string[];
  private isActiveGame: boolean;
  private isConnected: boolean;
  private gameRoom: string;
  private subscriptionGameStats: Subscription;
  private subscriptionActiveGames: Subscription;

  constructor(
    private socketService: SocketService,
    private userService: UserService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event): void {
    event.preventDefault();
    this.socketService.leaveSpectateGame(this.currentUser);
  }

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.currentUser = this.userService.getUserName();

    this.subscriptionActiveGames = this.socketService
      .getSpectateGames()
      .pipe(map((games) => games.map((game) => game.player.username)))
      .subscribe((games: string[]) => {
        this.activeGames = games;
        this.gameRoom = this.route.snapshot.queryParamMap.get('room');

        this.isActiveGame = !!this.activeGames.find((game) => game === this.gameRoom);
        if (this.currentUser && this.isActiveGame && !this.isConnected) {
          this.socketService.connectToSpectateGame(this.gameRoom, this.currentUser);
          this.isConnected = true;
        }

        if (!this.isConnected) {
          this.toastrService.error('The game you were watching has ended', '', {
            timeOut: 3000,
          });
          this.router.navigate([`/spectate`]);
        }
      });

    this.subscriptionGameStats = this.socketService
      .getCurrentStats()
      .subscribe(({ player, matrix, gameStatus, gameInformation }) => {
        this.player = player;
        this.currentMatrix = matrix;
        this.gameStatus = gameStatus;
        this.gameInformation = gameInformation;
        this.age = moment().diff(this.player.dateOfBirth, 'years');
        this.showBoard();
      });

    this.socketService.allActiveGames();
  }

  ngOnDestroy(): void {
    this.subscriptionGameStats.unsubscribe();
    this.socketService.leaveSpectateGame(this.currentUser);
  }

  private showBoard(): void {
    const board = new BoardModel(this.ctx, false);
    board.drawBoard(this.currentMatrix);
  }
}
