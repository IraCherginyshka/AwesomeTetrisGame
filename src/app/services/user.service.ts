import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserData } from '../interfaces/user-data.interface';
import { PlayerData } from '../interfaces/player-data.interface';
import { environment } from '../../environments/environment';
import { LocalStorage } from '../enums/local-storage.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint = environment.url;
  private token: string;
  private authListener = new BehaviorSubject<PlayerData | string>(
    JSON.parse(localStorage.getItem(LocalStorage.ACCESS_USER)),
  );
  private logoutListener = new Subject<boolean>();

  constructor(private http: HttpClient, public router: Router) {}

  public createUser(user: UserData): Observable<object> {
    const md5 = new Md5();
    const newUser: PlayerData = {
      username: user.userInformation.username,
      password: `${md5.appendStr(user.userInformation.password).end()}`,
      gender: user.playerInformation.gender,
      dateOfBirth: user.playerInformation.dateOfBirth,
      country: user.playerInformation.country,
      avatar: user.playerInformation.avatar,
    };
    return this.http.post(`${this.endpoint}/sign_up`, newUser);
  }

  public loginUser(userInform: {
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

  public logoutUser(): Observable<object> {
    localStorage.removeItem(LocalStorage.ACCESS_TOKEN);
    localStorage.removeItem(LocalStorage.ACCESS_USER);
    localStorage.removeItem(LocalStorage.USER_NAME);
    this.token = null;
    this.authListener.next(null);
    this.logoutListener.next(true);
    return this.http.get(`${this.endpoint}/logout`);
  }

  public setUser(user: PlayerData): void {
    this.authListener.next(user);
  }

  public getToken(): string {
    return localStorage.getItem(LocalStorage.ACCESS_TOKEN);
  }

  public getUserName(): string {
    return localStorage.getItem(LocalStorage.USER_NAME);
  }

  public getCurrentUser(): string {
    return localStorage.getItem(LocalStorage.ACCESS_USER);
  }
  public getAuthListener(): Observable<{}> {
    return this.authListener.asObservable();
  }

  public onLogoutListener(): Observable<boolean> {
    return this.logoutListener.asObservable();
  }
}
