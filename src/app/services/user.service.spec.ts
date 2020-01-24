import { Md5 } from 'ts-md5';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { LocalStorage } from '../enums/local-storage.enum';
import { UserData } from '../interfaces/user-data.interface';

describe('UserService', () => {
  let userService: UserService;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [UserService],
    });
    localStorage.clear();
    userService = TestBed.get(UserService);
    url = 'http://localhost:3000';
  });

  it('should be initialization', () => {
    expect(userService).toBeTruthy();
  });

  it('should post the information with coded password when user want to sign up', inject(
    [HttpClient],
    (backend: HttpClient) => {
      spyOn(backend, 'post').and.callThrough();

      const md5 = new Md5();
      const user: UserData = {
        userInformation: {
          username: 'testName',
          password: 'password',
        },
        playerInformation: {
          gender: 'male',
          dateOfBirth: '2000-01-01',
          country: 'Ukraine',
          avatar: 'icon',
        },
      };
      const playerData = {
        username: 'testName',
        password: `${md5.appendStr(user.userInformation.password).end()}`,
        gender: 'male',
        dateOfBirth: '2000-01-01',
        country: 'Ukraine',
        avatar: 'icon',
      };

      userService.createUser(user);

      expect(backend.post).toHaveBeenCalledWith(`${url}/sign_up`, playerData);
    },
  ));

  it('should post the correct information when user want to login', inject(
    [HttpClient],
    (backend: HttpClient) => {
      spyOn(backend, 'post').and.callThrough();

      const md5 = new Md5();
      const user = {
        username: 'testName',
        password: 'password',
      };
      const userData = {
        username: 'testName',
        password: md5.appendStr(user.password).end(),
      };

      userService.loginUser(user);

      expect(backend.post).toHaveBeenCalledWith(`${url}/login`, userData);
    },
  ));

  it('should call next in authListener with information about user by calling setUser function with user information', () => {
    spyOn(userService, 'getAuthListener').and.callThrough();

    const user = {
      username: 'testName',
      password: 'password',
      gender: 'male',
      dateOfBirth: '2000-01-01',
      country: 'Ukraine',
      avatar: 'icon',
    };

    userService.setUser(user);

    userService.getAuthListener().subscribe((accessUser) => {
      expect(accessUser).toEqual(user);
    });
  });

  it('should call next in logoutListener and in authListener with true and null respectively, remove information about token, user and name from LS by calling logoutUser function', () => {
    spyOn(userService, 'onLogoutListener').and.callThrough();
    spyOn(userService, 'getAuthListener').and.callThrough();

    userService.onLogoutListener().subscribe((isLogout) => {
      expect(isLogout).toBeTruthy();
    });

    userService.getAuthListener().subscribe((accessUser) => {
      expect(accessUser).toBeNull();
    });

    userService.logoutUser();
    expect(localStorage.getItem(LocalStorage.ACCESS_TOKEN)).toBeNull();
    expect(localStorage.getItem(LocalStorage.ACCESS_USER)).toBeNull();
    expect(localStorage.getItem(LocalStorage.USER_NAME)).toBeNull();
  });

  it('should get information from LS about token by clicking getToken function', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(() => {
      return 'token';
    });

    userService.getToken();
    expect(localStorage.getItem).toHaveBeenCalledWith(LocalStorage.ACCESS_TOKEN);
  });

  it('should get information from LS about name by clicking getUserName function', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(() => {
      return 'name';
    });

    userService.getUserName();
    expect(localStorage.getItem).toHaveBeenCalledWith(LocalStorage.USER_NAME);
  });

  it('should get information from LS about user by clicking getCurrentUser function', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(() => {
      return 'user';
    });

    userService.getCurrentUser();
    expect(localStorage.getItem).toHaveBeenCalledWith(LocalStorage.ACCESS_USER);
  });
});
