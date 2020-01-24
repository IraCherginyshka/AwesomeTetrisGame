import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { ToastrService } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';
import { GameService } from '../../services/game.service';
import { GameState } from '../../enums/game-state.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameStatsObject } from '../../interfaces/game-stats.interface';
import { UserService } from '../../services/user.service';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameBoardComponent],
      providers: [
        MockProvider({
          provider: GameService,
          methods: [
            'updateFigures',
            'setInitialInformation',
            'setNumberFilledLines',
            'setSavedInformation',
            'setGameState',
          ],
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
          provider: UserService,
          overwrite: {
            onLogoutListener(): Observable<boolean> {
              return of(true);
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

  it(' false should be set to isPlaying field and "pause" to textStateOveerlay field if LS has gameStats', () => {

    const gameStats = {"boardMatrix":[["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"]],
      "currentFigure":[["#00ff00","#00ff00","#2b3a42"],["#2b3a42","#00ff00","#00ff00"]],
      "currentMatrix":[["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#00ff00","#00ff00","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#00ff00","#00ff00","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"],["#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42","#2b3a42"]],
      "figurePosition":5,
      "duration":700,
      "lineWithFigure":0}

    spyOn(window.localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify(gameStats);
    });

    component.ngOnInit();
    expect(window.localStorage.getItem).toHaveBeenCalled();
    expect(component.isPlaying).toBeFalsy();
    expect(component.textStateOverlay).toBe(GameState.PAUSE);
  });
});
