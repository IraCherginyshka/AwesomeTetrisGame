import { MockProvider } from 'ngx-mock-provider';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { GameControlsComponent } from './game-controls.component';
import { GameService } from '../../services/game.service';
import { GameState } from '../../enums/game-state.enum';
import { DefaultSettings } from '../../enums/default-settings.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';

describe('GameControlsComponent', () => {
  let component: GameControlsComponent;
  let fixture: ComponentFixture<GameControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameControlsComponent],
      providers: [
        MockProvider({
          provider: GameService,
          methods: ['setMoveStep', 'setGameState'],
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

  it('should call setMoveStep in gameService with "right" when user press keyboard for right', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setMoveStep');
      // eslint-disable-next-line dot-notation
      component['isLostGame'] = false;

      const event = new KeyboardEvent('keypress', {
        key: DefaultSettings.RIGHT,
      });
      fixture.nativeElement.dispatchEvent(event);
      component.keyBoardInput(event);

      expect(gameService.setMoveStep).toHaveBeenCalledWith(FiguresMovement.RIGHT);
    },
  ));

  it('should call setMoveStep in gameService with "left" when user press keyboard for left', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setMoveStep');
      // eslint-disable-next-line dot-notation
      component['isLostGame'] = false;

      const event = new KeyboardEvent('keypress', {
        key: DefaultSettings.LEFT,
      });
      fixture.nativeElement.dispatchEvent(event);
      component.keyBoardInput(event);

      expect(gameService.setMoveStep).toHaveBeenCalledWith(FiguresMovement.LEFT);
    },
  ));

  it('should call setMoveStep in gameService with "rotate" when user press keyboard for rotate', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setMoveStep');
      // eslint-disable-next-line dot-notation
      component['isLostGame'] = false;

      const event = new KeyboardEvent('keypress', {
        key: DefaultSettings.ROTATE,
      });
      fixture.nativeElement.dispatchEvent(event);
      component.keyBoardInput(event);

      expect(gameService.setMoveStep).toHaveBeenCalledWith(FiguresMovement.ROTATE);
    },
  ));

  it('should call setMoveStep in gameService with "down" when user press keyboard for drop', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setMoveStep');
      // eslint-disable-next-line dot-notation
      component['isLostGame'] = false;

      const event = new KeyboardEvent('keypress', {
        key: DefaultSettings.DROP,
      });
      fixture.nativeElement.dispatchEvent(event);
      component.keyBoardInput(event);

      expect(gameService.setMoveStep).toHaveBeenCalledWith(FiguresMovement.DOWN);
    },
  ));

  it('should not call setMoveStep in gameService when isLostGame is true', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setMoveStep');

      const event = new KeyboardEvent('keypress', {
        key: DefaultSettings.DROP,
      });
      fixture.nativeElement.dispatchEvent(event);
      component.keyBoardInput(event);

      expect(gameService.setMoveStep).not.toHaveBeenCalledWith(FiguresMovement.DOWN);
    },
  ));

  it('should call setMoveStep in gameService with "down_off" when user press keyboard for drop', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setMoveStep');
      // eslint-disable-next-line dot-notation
      component['isLostGame'] = false;

      const event = new KeyboardEvent('keyup', {
        key: DefaultSettings.DROP,
      });
      fixture.nativeElement.dispatchEvent(event);
      component.keyBoardUp(event);

      expect(gameService.setMoveStep).toHaveBeenCalledWith(FiguresMovement.DOWN_OFF);
    },
  ));
});
