import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfileHeaderComponent } from './player-profile-header.component';

describe('PlayerProfileHeaderComponent', () => {
  let component: PlayerProfileHeaderComponent;
  let fixture: ComponentFixture<PlayerProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerProfileHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
