import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerData } from '../../interfaces/player-data.interface';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { GameResult } from '../../models/game-result.model';
import { LEADERBOARD_MAX_WIDTH } from '../../constants/game-information.const';

@Component({
  selector: 'atg-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
})
export class PlayerProfileComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  public currentUser: PlayerData;
  public userAge: number;
  public currentUserResults: GameResult[];

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private gameService: GameService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(this.userService.getCurrentUser());

    this.gameService
      .getPlayerGameResult()
      .pipe(
        map((results) =>
          results
            .filter((result) => result.username === this.currentUser.username)
            .slice(0, LEADERBOARD_MAX_WIDTH),
        ),
      )
      .subscribe((results) => {
        this.currentUserResults = results;
      });

    if (this.currentUser) {
      this.userAge = moment().diff(this.currentUser.dateOfBirth, 'years');
    }
  }

  public onLogout(): void {
    this.toastrService.warning('You have logged out!');
    this.userService.logoutUser().subscribe();
    this.router.navigate(['/login']);
  }
}
