import { MockProvider } from 'ngx-mock-provider';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { GameStateControlsComponent } from './game-state-controls.component';
import { GameService } from '../../services/game.service';
import { GameState } from '../../enums/game-state.enum';
import { DefaultSettings } from '../../enums/default-settings.enum';

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

  it('should set false to isPlaying field when get true from service onLostGame', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'onLostGame').and.returnValue(of(true));

      component.ngOnInit();
      expect(gameService.onLostGame).toHaveBeenCalled();
      expect(component.isPlaying).toBeFalsy();
    },
  ));

  it('should set false to isPlaying field when get pause from service getGameState', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'getGameState').and.returnValue(of(GameState.PAUSE));

      component.ngOnInit();
      expect(gameService.getGameState).toHaveBeenCalled();
      expect(component.isPlaying).toBeFalsy();
    },
  ));

  it('clicking on reset button should call resetGame function, call setInitialInformation and setGameState functions on the gameService', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setInitialInformation');
      spyOn(gameService, 'setGameState');
      spyOn(component, 'resetGame').and.callThrough();

      component.resetGame();

      expect(gameService.setInitialInformation).toHaveBeenCalled();
      expect(gameService.setGameState).toHaveBeenCalledWith('reset');
    },
  ));

  it('clicking on pause button should call resetGame function, call setGameState functions on the gameService', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setGameState');
      spyOn(component, 'pauseGame').and.callThrough();
      component.isPlaying = true;

      fixture.detectChanges();
      component.pauseGame();

      expect(gameService.setGameState).toHaveBeenCalledWith('pause');
    },
  ));

  it('clicking on play button should call setGameState functions on the gameService', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setGameState');
      spyOn(component, 'playGame').and.callThrough();

      component.playGame();

      expect(gameService.setGameState).toHaveBeenCalledWith('play');
    },
  ));

  it('should not call setGameState func on the gameService if isPlaying is true', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'setGameState');
      spyOn(component, 'playGame');

      component.playGame();
      component.isPlaying = true;

      expect(gameService.setGameState).not.toHaveBeenCalledWith('play');
    },
  ));

  it('should call the pause function by pressing the key on keyboard for pause', () => {
    spyOn(component, 'pauseGame').and.callThrough();

    const event = new KeyboardEvent('keydown', {
      key: DefaultSettings.PAUSE,
    });
    fixture.nativeElement.dispatchEvent(event);
    component.keyBoardInput(event);

    expect(component.pauseGame).toHaveBeenCalled();
  });

  it('should call the reset function by pressing the key on keyboard for reset', () => {
    spyOn(component, 'resetGame').and.callThrough();

    const event = new KeyboardEvent('keydown', {
      key: DefaultSettings.RESET,
    });
    fixture.nativeElement.dispatchEvent(event);
    component.keyBoardInput(event);

    expect(component.resetGame).toHaveBeenCalled();
  });

  it('should call the play function by pressing the key on keyboard for play', () => {
    spyOn(component, 'playGame').and.callThrough();

    const event = new KeyboardEvent('keydown', {
      key: DefaultSettings.PLAY,
    });
    fixture.nativeElement.dispatchEvent(event);
    component.keyBoardInput(event);

    expect(component.playGame).toHaveBeenCalled();
  });
});
