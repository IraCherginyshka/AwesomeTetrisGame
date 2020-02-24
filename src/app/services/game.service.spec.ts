import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { GameService } from './game.service';
import { GameState } from '../enums/game-state.enum';
import { FiguresMovement } from '../enums/figures-movement.enum';

describe('GameService', () => {
  let gameService: GameService;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [GameService],
    });

    localStorage.clear();
    gameService = TestBed.get(GameService);
    url = 'http://localhost:3000';
  });

  it('should be initialization', () => {
    expect(gameService).toBeTruthy();
  });

  it('should post the correct game result, call next in lostGameSubject and return undefined', inject(
    [HttpClient],
    (backend: HttpClient) => {
      spyOn(gameService, 'sendResult').and.callThrough();
      spyOn(backend, 'post').and.callThrough();
      spyOn(window.localStorage, 'getItem').and.callFake(() => {
        return 'TestName';
      });

      const savedStats = { lines: 20, score: 220, level: 4 };
      const gameResult = {
        username: 'TestName',
        ...savedStats,
      };

      gameService.setSavedInformation(savedStats);

      gameService.sendResult();

      expect(backend.post).toHaveBeenCalledWith(`${url}/add_result`, gameResult);
    },
  ));

  it('should call next in numberLinesSubject and return correct game stats by calling setNumberFilledLines function with number', () => {
    spyOn(gameService, 'onUpdateGameInformation').and.callThrough();

    gameService.setNumberFilledLines(2);

    gameService.onUpdateGameInformation().subscribe((stats) => {
      expect(stats).toEqual({ lines: 2, score: 50, level: 1 });
    });
  });

  it('should call next in numberLinesSubject and return stats by calling setSavedInformation function with stats', () => {
    spyOn(gameService, 'onUpdateGameInformation').and.callThrough();
    const savedStats = { lines: 20, score: 220, level: 3 };

    gameService.setSavedInformation(savedStats);

    gameService.onUpdateGameInformation().subscribe((stats) => {
      expect(stats).toEqual(savedStats);
    });
  });

  it('should call next in numberLinesSubject and return initial stats by calling setInitialInformation function', () => {
    spyOn(gameService, 'onUpdateGameInformation').and.callThrough();
    const initialState = { lines: 0, score: 0, level: 0 };

    gameService.setInitialInformation();

    gameService.onUpdateGameInformation().subscribe((stats) => {
      expect(stats).toEqual(initialState);
    });
  });

  it('should call next in gameStateSubject and return state by calling setGameState function with state', () => {
    spyOn(gameService, 'getGameState').and.callThrough();

    gameService.getGameState().subscribe((state) => {
      expect(state).toEqual(GameState.PLAY);
    });

    gameService.setGameState(GameState.PLAY);
  });

  it('should call next in movementSubject and return step by calling setMoveStep function with step if isPlaying is true', () => {
    spyOn(gameService, 'onNextStep').and.callThrough();

    gameService.onNextStep().subscribe((step) => {
      expect(step).toEqual(FiguresMovement.ROTATE);
    });

    // eslint-disable-next-line dot-notation
    gameService['isPlaying'] = true;
    gameService.setMoveStep(FiguresMovement.ROTATE);
  });

  it('should not call next in movementSubject and return step by calling setMoveStep function with step if isPlaying is false', () => {
    spyOn(gameService, 'onNextStep').and.callThrough();

    gameService.setMoveStep(FiguresMovement.ROTATE);

    expect(gameService.onNextStep).not.toHaveBeenCalled();
  });
});
