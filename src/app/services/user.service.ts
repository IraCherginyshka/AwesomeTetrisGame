import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../interfaces/userData.interface';
import { PlayerData } from '../interfaces/playerData.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint = 'http://localhost:3000';
  private token: string;
  private authListener = new BehaviorSubject<PlayerData>(
    JSON.parse(localStorage.getItem('access_user')),
  );
  private currentUser = {};

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

  loginUser(userInform: { username: string; password: string }): void {
    const md5 = new Md5();
    const userData = {
      username: userInform.username,
      password: md5.appendStr(userInform.password).end(),
    };

    this.http
      .post<{ token: string; user: PlayerData }>(`${this.endpoint}/login`, userData)
      .subscribe(({ token, user }) => {
        localStorage.setItem('access_token', token);
        localStorage.setItem('access_user', JSON.stringify(user));
        this.token = token;
        if (token) {
          this.currentUser = user;
          this.authListener.next(user);
        }
      });
  }

  logoutUser(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('access_user');
    this.token = null;
    this.authListener.next(null);
  }

  getToken(): string {
    return localStorage.getItem('access_token');
  }

  getAuthListener(): Observable<{}> {
    return this.authListener.asObservable();
  }
}
