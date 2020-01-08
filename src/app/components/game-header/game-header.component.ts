import { Subscription } from 'rxjs';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../../services/user.service';
import { PlayerData } from '../../interfaces/playerData.interface';

@Component({
  selector: 'atg-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss'],
})
export class GameHeaderComponent implements OnInit, OnDestroy {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  public userIsAuthenticated = !!localStorage.getItem('access_user');

  private authSubscription: Subscription;

  constructor(private userService: UserService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
    if (!this.userIsAuthenticated) {
      setTimeout(() => this.toastrService.info('Please login to save your score to leaderboard'));
    }

    this.authSubscription = this.userService
      .getAuthListener()
      .subscribe((user: PlayerData | null) => {
        if (user) {
          this.toastrService.success('Welcome to AwesomeTetrisGame!');
          this.userIsAuthenticated = true;
        } else {
          this.userIsAuthenticated = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
