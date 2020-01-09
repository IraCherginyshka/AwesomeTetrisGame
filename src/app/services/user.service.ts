import { BehaviorSubject, Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserData } from '../interfaces/userData.interface';
import { PlayerData } from '../interfaces/playerData.interface';
import { environment } from '../../environments/environment';
import { LocalStorage } from '../enums/local-storage.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint = environment.url;
  private token: string;
  private authListener = new BehaviorSubject<PlayerData>(
    JSON.parse(localStorage.getItem(LocalStorage.ACCESS_USER)),
  );

  constructor(private http: HttpClient, public router: Router) {}

  createUser(user: UserData): Observable<object> {
    const md5 = new Md5();
    const newUser: PlayerData = {
      username: user.userInformation.username,
      password: `${md5.appendStr(user.userInformation.password).end()}`,
      gender: user.playerInformation.gender,
      dateOfBirth: user.playerInformation.dateOfBirth,
      country: user.playerInformation.country,
    };
    return this.http.post(`${this.endpoint}/sign_up`, newUser);
  }

  loginUser(userInform: {
    username: string;
    password: string;
  }): Observable<{ token: string; user: PlayerData }> {
    const md5 = new Md5();
    const userData = {
      username: userInform.username,
      password: md5.appendStr(userInform.password).end(),
    };
    return this.http.post<{ token: string; user: PlayerData }>(`${this.endpoint}/login`, userData);
  }

  logoutUser(): Observable<object> {
    localStorage.removeItem(LocalStorage.ACCESS_TOKEN);
    localStorage.removeItem(LocalStorage.ACCESS_USER);
    localStorage.removeItem(LocalStorage.USER_NAME);
    this.token = null;
    this.authListener.next(null);
    return this.http.get(`${this.endpoint}/logout`);
  }

  setUser(user: PlayerData): void {
    this.authListener.next(user);
  }

  getToken(): string {
    return localStorage.getItem(LocalStorage.ACCESS_TOKEN);
  }

  getUserName(): string {
    return localStorage.getItem(LocalStorage.USER_NAME);
  }

  getAuthListener(): Observable<{}> {
    return this.authListener.asObservable();
  }
}
