import { TestBed } from '@angular/core/testing';

import { ResizeService } from './resize.service';

describe('ResizeService', () => {
  let resizeService: ResizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResizeService],
    });

    localStorage.clear();
    resizeService = TestBed.get(ResizeService);
  });

  it('should be created', () => {
    expect(resizeService).toBeTruthy();
  });

  it('should set blockSize 25 after calling setBlockSize function with 25', () => {
    resizeService.setBlockSize(25);
    expect(resizeService.blockSize).toBe(25);
  });
});
