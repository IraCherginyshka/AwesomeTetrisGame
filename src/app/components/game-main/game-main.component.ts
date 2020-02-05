import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { LocalStorage } from '../../enums/local-storage.enum';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'atg-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss'],
})
export class GameMainComponent implements OnInit {
  public isCustomControls = !!localStorage.getItem(LocalStorage.CONTROLS);
  public spectatorList = new Set();

  private subscriptionJoinedUser: Subscription;
  private subscriptionDisconnectedUser: Subscription;

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.subscriptionJoinedUser = this.socketService.getJoinedUser().subscribe((user) => {
      this.spectatorList.add(user);
    });

    this.subscriptionDisconnectedUser = this.socketService
      .getDisconnectedUser()
      .subscribe((user) => {
        this.spectatorList.delete(user);
      });
  }
}
