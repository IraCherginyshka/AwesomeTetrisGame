import { MockProvider } from 'ngx-mock-provider';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlayerProfileComponent } from './player-profile.component';
import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { GameResult } from '../../models/game-result.model';

describe('PlayerProfileComponent', () => {
  let component: PlayerProfileComponent;
  let fixture: ComponentFixture<PlayerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlayerProfileComponent],
      providers: [
        MockProvider({
          provider: UserService,
          overwrite: {
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
        MockProvider({
          provider: GameService,
          overwrite: {
            getPlayerGameResult(): Observable<GameResult[]> {
              return of([
                { username: 'Test', lines: 3, score: 7, level: 1 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 16 },
                { username: 'TestName', lines: 32, score: 72, level: 17 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 10 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'TestName', lines: 32, score: 72, level: 13 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'TestName', lines: 32, score: 72, level: 20 },
              ]);
            },
          },
        }),
        MockProvider({
          provider: ToastrService,
          methods: ['warning'],
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should set user information to currentUser field from localStorage', () => {
    const user = {
      username: 'TestName',
      password: 'password',
      gender: 'test',
      dateOfBirth: '2000-01-01',
      country: 'test country',
      avatar: 'testURL',
    };

    component.ngOnInit();
    expect(component.currentUser).toEqual(user);
  });

  it('should filter results by current user name', () => {
    const filterArray = [
      { username: 'TestName', lines: 32, score: 72, level: 17 },
      { username: 'TestName', lines: 32, score: 72, level: 13 },
      { username: 'TestName', lines: 32, score: 72, level: 20 },
    ];

    component.ngOnInit();
    expect(component.currentUserResults).toEqual(filterArray);
  });
});
