import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';

import { PlayerData } from '../../interfaces/player-data.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'atg-player-profile-header',
  templateUrl: './player-profile-header.component.html',
  styleUrls: ['./player-profile-header.component.scss'],
})
export class PlayerProfileHeaderComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  public currentUser: PlayerData;

  constructor(private userService: UserService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(this.userService.getCurrentUser());
  }

  public onLogout(): void {
    this.toastrService.warning('You have logged out!');
    this.userService.logoutUser().subscribe();
  }
}
