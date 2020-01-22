import { MockProvider } from 'ngx-mock-provider';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlsComponent } from './game-controls.component';
import { GameService } from '../../services/game.service';
import { GameState } from '../../enums/game-state.enum';

describe('GameControlsComponent', () => {
  let component: GameControlsComponent;
  let fixture: ComponentFixture<GameControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameControlsComponent],
      providers: [
        MockProvider({
          provider: GameService,
          methods: ['setMoveStep'],
          overwrite: {
            getGameState(): Observable<GameState> {
              return of(GameState.RESET);
            },
            onLostGame(): Observable<boolean> {
              return of(true);
            },
          },
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlsComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
