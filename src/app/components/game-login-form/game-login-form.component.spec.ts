import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { GameLoginFormComponent } from './game-login-form.component';
import { UserService } from '../../services/user.service';
import { PlayerData } from '../../interfaces/player-data.interface';
import { UserData } from '../../interfaces/user-data.interface';

describe('GameLoginFormComponent', () => {
  let component: GameLoginFormComponent;
  let fixture: ComponentFixture<GameLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserModule, FormsModule, ReactiveFormsModule],
      declarations: [GameLoginFormComponent],
      providers: [
        MockProvider({
          provider: UserService,
          methods: ['setUser'],
          overwrite: {
            loginUser(userInform: {
              username: string;
              password: string;
            }): Observable<{ token: string; user: PlayerData }> {
              return of({
                token: 'fffffffffffff.ffffffffff.fffffffff',
                user: {
                  username: 'TestName',
                  password: 'password',
                  gender: 'test',
                  dateOfBirth: 'testDate',
                  country: 'test country',
                  avatar: 'testURL',
                },
              });
            },
            createUser(user: UserData): Observable<object> {
              return of({
                username: 'TestName',
                password: 'password',
                gender: 'test',
                dateOfBirth: 'testDate',
                country: 'test country',
                avatar: 'testURL',
              });
            },
          },
        }),
        MockProvider({
          provider: ToastrService,
          methods: ['warning', 'error'],
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLoginFormComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logInForm should be invalid', () => {
    component.logInForm.controls.username.setValue('');
    component.logInForm.controls.password.setValue('');
    expect(component.logInForm.valid).toBeFalsy();
  });

  it('logInForm should be valid', () => {
    component.logInForm.controls.username.setValue('TestName');
    component.logInForm.controls.password.setValue('1Qqqqqqqq');
    expect(component.logInForm.valid).toBeTruthy();
  });
});
