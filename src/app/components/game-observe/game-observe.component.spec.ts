import { MockProvider } from 'ngx-mock-provider';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameObserveComponent } from './game-observe.component';
import { UserService } from '../../services/user.service';
import { SocketService } from '../../services/socket.service';
import { ObservePlayerDataInterface } from '../../interfaces/observe-player-data.interface';

describe('GameObserveComponent', () => {
  let component: GameObserveComponent;
  let fixture: ComponentFixture<GameObserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameObserveComponent],
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
          methods: ['getAllActiveGames'],
          overwrite: {
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
    fixture = TestBed.createComponent(GameObserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
