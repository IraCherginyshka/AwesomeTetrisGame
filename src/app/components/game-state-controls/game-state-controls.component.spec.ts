import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStateControlsComponent } from './game-state-controls.component';

describe('GameControlsComponent', () => {
  let component: GameStateControlsComponent;
  let fixture: ComponentFixture<GameStateControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameStateControlsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStateControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
