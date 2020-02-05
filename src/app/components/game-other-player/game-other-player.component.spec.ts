import { MockProvider } from 'ngx-mock-provider';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameOtherPlayerComponent } from './game-other-player.component';
import { UserService } from '../../services/user.service';
import { SocketService } from '../../services/socket.service';
import { ObservePlayerDataInterface } from '../../interfaces/observe-player-data.interface';
import { ObserveGameStatsInterface } from '../../interfaces/observe-game-stats.interface';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { GameState } from '../../enums/game-state.enum';

describe('GameOtherPlayerComponent', () => {
  let component: GameOtherPlayerComponent;
  let fixture: ComponentFixture<GameOtherPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameOtherPlayerComponent],
      imports: [RouterTestingModule],
      providers: [
        MockProvider({
          provider: ToastrService,
          methods: ['warning', 'error', 'success'],
        }),
        MockProvider({
          provider: UserService,
          overwrite: {
            getUserName(): string {
              return 'TestName';
            },
          },
        }),
        MockProvider({
          provider: SocketService,
          methods: ['getAllActiveGames', 'leaveSpectateGame', 'connectToSpectateGame'],
          overwrite: {
            getCurrentStats(): Observable<ObserveGameStatsInterface> {
              return of({
                player: {
                  username: 'TestName',
                  password: 'string',
                  gender: 'male',
                  dateOfBirth: '2000-01-01',
                  country: 'string',
                  avatar: 'America.ico',
                },
                matrix: [
                  [FiguresColors.DEFAULT, FiguresColors.DEFAULT],
                  [FiguresColors.DEFAULT, FiguresColors.DEFAULT],
                ],
                gameStatus: GameState.PLAY,
                gameInformation: {
                  lines: 3,
                  score: 3,
                  level: 3,
                },
              });
            },
            getSpectateGames(): Observable<ObservePlayerDataInterface[]> {
              return of([
                {
                  player: {
                    username: 'TestName',
                    password: 'string',
                    gender: 'male',
                    dateOfBirth: '2000-01-01',
                    country: 'string',
                    avatar: 'America.ico',
                  },
                  level: 3,
                },
                {
                  player: {
                    username: 'TestName2',
                    password: 'string',
                    gender: 'male',
                    dateOfBirth: '2000-01-01',
                    country: 'string',
                    avatar: 'America.ico',
                  },
                  level: 3,
                },
              ]);
            },
          },
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOtherPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
