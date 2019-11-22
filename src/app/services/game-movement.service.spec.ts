import { TestBed } from '@angular/core/testing';

import { GameMovementService } from './game-movement.service';

describe('GameMovementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameMovementService = TestBed.get(GameMovementService);
    expect(service).toBeTruthy();
  });
});
