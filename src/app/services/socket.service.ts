import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { ObserveGameStatsInterface } from '../interfaces/observe-game-stats.interface';
import { ObservePlayerDataInterface } from '../interfaces/observe-player-data.interface';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: SocketIOClient.Socket;
  private endpoint = environment.url;
  private currentGameRoom: string;

  constructor() {
    this.socket = io(this.endpoint);
  }

  public connectToSpectateGame(gameRoom: string, username: string): void {
    this.currentGameRoom = gameRoom;
    this.socket.emit('join-game', gameRoom, username);
  }

  public leaveSpectateGame(username: string): void {
    this.socket.emit('leave-game', this.currentGameRoom, username);
    this.currentGameRoom = undefined;
  }

  public getJoinedUser(): Observable<string> {
    return new Observable<string>((observe) => {
      this.socket.on('user-connect', (user: string) => {
        observe.next(user);
      });
    });
  }

  public getDisconnectedUser(): Observable<string> {
    return new Observable<string>((observe) => {
      this.socket.on('user-disconnect', (user: string) => {
        observe.next(user);
      });
    });
  }

  public changeGameStats(spectateStats: ObserveGameStatsInterface): void {
    this.socket.emit('new-stats', spectateStats);
  }

  public getCurrentStats(): Observable<ObserveGameStatsInterface> {
    return new Observable((observe) => {
      this.socket.on('current-stats', (spectateStats: ObserveGameStatsInterface) => {
        observe.next(spectateStats);
      });
    });
  }

  public createNewSpectateGame(game: ObservePlayerDataInterface): void {
    this.socket.emit('new-active-game', game);
  }

  public getAllActiveGames(): void {
    this.socket.emit('all-active-games');
  }

  public getSpectateGames(): Observable<ObservePlayerDataInterface[]> {
    return new Observable((observe) => {
      this.socket.on('active-games', (games: []) => {
        observe.next(games);
      });
    });
  }

  public deleteSpectateGame(username: string): void {
    this.socket.emit('delete-game', username);
  }
}
