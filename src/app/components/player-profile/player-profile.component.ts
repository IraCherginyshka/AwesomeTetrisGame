import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { PlayerData } from '../../interfaces/playerData.interface';
import { UserService } from '../../services/user.service';

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
    this.currentUser = JSON.parse(localStorage.getItem('access_user'));
    if (this.currentUser) {
      this.iconSrc = this.currentUser.gender === 'male' ? 'Mask.ico' : 'Spiderwoman.ico';
    }
  }

  onLogout(): void {
    this.toastrService.warning('You have logged out!');
    this.userService.logoutUser();
    this.showCurrentUser();
  }
}
