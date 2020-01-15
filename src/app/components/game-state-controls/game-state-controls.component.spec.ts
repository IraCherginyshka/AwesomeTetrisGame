import { MockProvider } from 'ngx-mock-provider';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStateControlsComponent } from './game-state-controls.component';
import { GameService } from '../../services/game.service';
import { GameState } from '../../enums/game-state.enum';

describe('GameStateControlsComponent', () => {
  let component: GameStateControlsComponent;
  let fixture: ComponentFixture<GameStateControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameStateControlsComponent],
      providers: [
        MockProvider({
          provider: GameService,
          methods: ['setInitialInformation', 'setGameState'],
          overwrite: {
            onLostGame(): Observable<boolean> {
              return of(true);
            },
            getGameState(): Observable<GameState> {
              return of(GameState.PAUSE);
            },
          },
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStateControlsComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
