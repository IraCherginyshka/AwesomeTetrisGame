import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { PlayerData } from '../../interfaces/playerData.interface';

@Component({
  selector: 'atg-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss'],
})
export class GameHeaderComponent implements OnInit, OnDestroy {
  public userIsAuthenticated = false;
  private authSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.authSubscription = this.userService
      .getAuthListener()
      .subscribe((user: PlayerData | null) => {
        this.userIsAuthenticated = !!user;
      });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
