import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SocketService } from './socket.service';

describe('SocketService', () => {
  let socketService: SocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [SocketService],
    });
    localStorage.clear();
    socketService = TestBed.get(SocketService);
  });

  it('should be initialization', () => {
    expect(socketService).toBeTruthy();
  });

  it('should set "room1" to gameRoom field after calling connectToSpectateGame function with "room1", "TestName"', () => {
    socketService.connectToSpectateGame('room1', 'TestName');
    expect(socketService['currentGameRoom']).toBe('room1');
  });
});
