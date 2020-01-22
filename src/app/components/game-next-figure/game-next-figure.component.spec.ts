import { MockProvider } from 'ngx-mock-provider';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNextFigureComponent } from './game-next-figure.component';
import { GameService } from '../../services/game.service';

describe('GameNextFigureComponent', () => {
  let component: GameNextFigureComponent;
  let fixture: ComponentFixture<GameNextFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameNextFigureComponent],
      providers: [
        MockProvider({
          provider: GameService,
          methods: ['updateFigures'],
          overwrite: {
            onNewFigureCreated(): Observable<{}> {
              return of({
                previousFigure: [
                  ['#ffff00', '#ffff00'],
                  ['#ffff00', '#ffff00'],
                ],
                randomNextFigure: [
                  ['#2b3a42', '#ff0000', '#2b3a42'],
                  ['#2b3a42', '#ff0000', '#2b3a42'],
                  ['#2b3a42', '#ff0000', '#2b3a42'],
                  ['#2b3a42', '#ff0000', '#2b3a42'],
                ],
              });
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
    fixture = TestBed.createComponent(GameNextFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
