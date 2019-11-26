import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNextFigureComponent } from './game-next-figure.component';

describe('GameNextFigureComponent', () => {
  let component: GameNextFigureComponent;
  let fixture: ComponentFixture<GameNextFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameNextFigureComponent],
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
