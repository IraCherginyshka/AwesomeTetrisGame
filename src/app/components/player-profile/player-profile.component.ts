import { Component, OnInit } from '@angular/core';
import { PlayerData } from '../../interfaces/playerData.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'atg-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
})
export class PlayerProfileComponent implements OnInit {
  public currentUser: PlayerData;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('access_user'));
  }

  onLogout(): void {
    this.userService.logoutUser();
  }
}
