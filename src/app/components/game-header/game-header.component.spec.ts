import { MockProvider } from 'ngx-mock-provider';
import { Observable, of } from 'rxjs';
import { ToastContainerDirective, ToastrModule } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { GameHeaderComponent } from './game-header.component';
import { UserService } from '../../services/user.service';
import { PlayerProfileHeaderComponent } from '../player-profile-header/player-profile-header.component';

describe('GameHeaderComponent', () => {
  let component: GameHeaderComponent;
  let fixture: ComponentFixture<GameHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, ToastrModule.forRoot()],
      declarations: [GameHeaderComponent, PlayerProfileHeaderComponent, ToastContainerDirective],
      providers: [
        MockProvider({
          provider: UserService,
          overwrite: {
            getAuthListener(): Observable<{}> {
              return of({});
            },
            getCurrentUser(): string {
              return JSON.stringify({
                username: 'TestName',
                password: 'password',
                gender: 'test',
                dateOfBirth: '2000-01-01',
                country: 'test country',
                avatar: 'testURL',
              });
            },
          },
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHeaderComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
