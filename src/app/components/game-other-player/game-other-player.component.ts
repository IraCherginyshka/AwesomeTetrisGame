import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { SocketService } from '../../services/socket.service';
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

  @ViewChild('spectate_canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private currentMatrix: FiguresColors[][];
  private subscriptionGameStats: Subscription;

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.subscriptionGameStats = this.socketService
      .getCurrentStats()
      .subscribe(({ player, matrix, gameStatus, gameInformation }) => {
        this.player = player;
        this.currentMatrix = matrix;
        this.gameStatus = gameStatus;
        this.gameInformation = gameInformation;
        this.showBoard();
      });

    if (this.player) {
      this.age = moment().diff(this.player.dateOfBirth, 'years');
    }
  }

  ngOnDestroy(): void {
    this.subscriptionGameStats.unsubscribe();

    this.socketService.leaveSpectateGame(this.player.username);
  }

  private showBoard(): void {
    const board = new BoardModel(this.ctx, false);
    board.drawBoard(this.currentMatrix);
  }
}
