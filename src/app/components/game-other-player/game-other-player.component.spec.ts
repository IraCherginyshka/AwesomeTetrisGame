import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOtherPlayerComponent } from './game-other-player.component';

describe('GameOtherPlayerComponent', () => {
  let component: GameOtherPlayerComponent;
  let fixture: ComponentFixture<GameOtherPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameOtherPlayerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOtherPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
