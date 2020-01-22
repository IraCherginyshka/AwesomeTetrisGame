import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { ToastrService } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';
import { GameService } from '../../services/game.service';
import { GameState } from '../../enums/game-state.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameStatsObject } from '../../interfaces/game-stats.interface';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameBoardComponent],
      providers: [
        MockProvider({
          provider: GameService,
          methods: ['updateFigures', 'setInitialInformation', 'setNumberFilledLines'],
          overwrite: {
            getGameState(): Observable<GameState> {
              return of(GameState.PAUSE);
            },
            onNextStep(): Observable<FiguresMovement> {
              return of(FiguresMovement.RIGHT);
            },
            onNewFigureCreated(): Observable<{}> {
              return of({
                previousFigure: [
                  ['#ffff00', '#ffff00'],
                  ['#ffff00', '#ffff00'],
                ],
                randomNextFigure: [
                  ['#2b3a42', '#ff0000', '#2b3a42'],
                  ['#2b3a42', '#ff0000', '#2b3a42'],
                  ['#2b3a42', '#ff0000', '#2b3a42'],
                  ['#2b3a42', '#ff0000', '#2b3a42'],
                ],
              });
            },
            onUpdateGameInformation(): Observable<GameStatsObject> {
              return of({
                lines: 3,
                score: 3,
                level: 3,
              });
            },
            setLostGame(): Observable<object> {
              return of({
                username: 'TestName',
                lines: 5,
                score: 5,
                level: 5,
              });
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
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
