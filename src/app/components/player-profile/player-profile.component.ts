import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';

import { PlayerData } from '../../interfaces/player-data.interface';
import { UserService } from '../../services/user.service';
import { LocalStorage } from '../../enums/local-storage.enum';

@Component({
  selector: 'atg-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
})
export class PlayerProfileComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  public currentUser: PlayerData;
  public iconSrc: string;

  constructor(private userService: UserService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.showCurrentUser();
  }

  showCurrentUser(): void {
    this.currentUser = JSON.parse(localStorage.getItem(LocalStorage.ACCESS_USER));
    if (this.currentUser) {
      this.iconSrc = this.currentUser.gender === 'male' ? 'Mask.ico' : 'Spiderwoman.ico';
    }
  }

  onLogout(): void {
    this.toastrService.warning('You have logged out!');
    this.userService.logoutUser().subscribe();
    this.showCurrentUser();
  }
}
