import { MockProvider } from 'ngx-mock-provider';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInformationComponent } from './game-information.component';
import { GameService } from '../../services/game.service';
import { GameStatsObject } from '../../interfaces/game-stats.interface';

describe('GameInformationComponent', () => {
  let component: GameInformationComponent;
  let fixture: ComponentFixture<GameInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameInformationComponent],
      providers: [
        MockProvider({
          provider: GameService,
          overwrite: {
            onUpdateGameInformation(): Observable<GameStatsObject> {
              return of({
                lines: 3,
                score: 3,
                level: 3,
              });
            },
          },
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInformationComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
