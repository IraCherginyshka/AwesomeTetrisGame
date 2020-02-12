import { MockProvider } from 'ngx-mock-provider';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LongPressDirective } from './long-press.directive';
import { GameService } from '../services/game.service';

@Component({
  template: '<p atgLongPress>Testing Directives is awesome!</p>',
})
class TestComponent {}

describe('LongPressDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let longPressDirective: LongPressDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LongPressDirective],
      providers: [
        LongPressDirective,
        MockProvider({
          provider: GameService,
          methods: ['setMoveStep'],
        }),
      ],
    });
    longPressDirective = TestBed.inject(LongPressDirective);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should be initialization', () => {
    expect(longPressDirective).toBeTruthy();
  });
});
