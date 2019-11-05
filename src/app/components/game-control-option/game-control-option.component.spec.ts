import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlOptionComponent } from './game-control-option.component';

describe('GameControlOptionComponent', () => {
  let component: GameControlOptionComponent;
  let fixture: ComponentFixture<GameControlOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameControlOptionComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
