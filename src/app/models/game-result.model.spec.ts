import { TestBed } from '@angular/core/testing';

import { GameResult } from './game-result.model';

describe('GameResultModel', () => {
  let gameResultModel: GameResult;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameResult],
    });

    localStorage.clear();
  });

  it('should be created with results field', () => {
    const result = {
      username: 'TestName',
      lines: 3,
      score: 3,
      level: 3,
    };

    gameResultModel = new GameResult(result);

    expect(gameResultModel.username).toBe('TestName');
    expect(gameResultModel.lines).toBe(3);
    expect(gameResultModel.score).toBe(3);
    expect(gameResultModel.level).toBe(3);
  });
});
