import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { GameLeaderboardComponent } from './game-leaderboard.component';
import { GameService } from '../../services/game.service';
import { UserService } from '../../services/user.service';
import { GameResult } from '../../models/game-result.model';

describe('GameLeaderboardComponent', () => {
  let component: GameLeaderboardComponent;
  let fixture: ComponentFixture<GameLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameLeaderboardComponent],
      providers: [
        MockProvider({
          provider: GameService,
          overwrite: {
            getPlayerGameResult(): Observable<GameResult[]> {
              return of([
                { username: 'Test', lines: 3, score: 7, level: 1 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'TestName', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
                { username: 'Test2', lines: 32, score: 72, level: 12 },
              ]);
            },
          },
        }),
        MockProvider({
          provider: UserService,
          overwrite: {
            getAuthListener(): Observable<{}> {
              return of({});
            },
            getUserName(): string {
              return 'TestName';
            },
          },
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get results from GameService on load', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'getPlayerGameResult').and.returnValue(
        of([
          { username: 'Test', lines: 3, score: 7, level: 1 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
        ]),
      );

      const gameResults = [
        { username: 'Test', lines: 3, score: 7, level: 1 },
        { username: 'Test2', lines: 32, score: 72, level: 12 },
      ];

      component.ngOnInit();
      expect(component.gameResults).toEqual(gameResults);
      expect(gameService.getPlayerGameResult).toHaveBeenCalled();
    },
  ));

  it('should limit results to 10 if there are more', () => {
    component.ngOnInit();
    expect(component.gameResults.length).toBe(10);
  });

  it('should set current player index in result list to currentPlayerPlace field and if it is less than 10, should set false to isCurrentPlayerNotInTop field', () => {
    component.ngOnInit();
    expect(component.currentPlayerPlace).toBe(3);
    expect(component.isCurrentPlayerNotInTop).toBe(false);
  });

  it('should set true to isCurrentPlayerNotInTop field if current player index in result list is more than 10', inject(
    [GameService],
    (gameService: GameService) => {
      spyOn(gameService, 'getPlayerGameResult').and.returnValue(
        of([
          { username: 'Test', lines: 3, score: 7, level: 1 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'Test3', lines: 32, score: 72, level: 12 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'Test2', lines: 32, score: 72, level: 12 },
          { username: 'TestName', lines: 32, score: 72, level: 12 },
        ]),
      );

      component.ngOnInit();
      expect(component.isCurrentPlayerNotInTop).toBeTruthy();
      expect(component.currentPlayerPlace).toBe(11);
      expect(component.currentPlayerNotInTop).toEqual({
        username: 'TestName',
        lines: 32,
        score: 72,
        level: 12,
      });
    },
  ));

  it('should reset information about user if get null from UserService.getAuthListener ', inject(
    [UserService],
    (userService: UserService) => {
      spyOn(userService, 'getAuthListener').and.returnValue(of(null));

      component.ngOnInit();
      expect(userService.getAuthListener).toHaveBeenCalled();
      expect(component.isCurrentPlayerNotInTop).toBeFalsy();
      expect(component.currentPlayerName).toBeNull();
    },
  ));
});
