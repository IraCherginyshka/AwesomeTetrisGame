import { MockProvider } from 'ngx-mock-provider';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeDirective } from './resize.directive';
import { ResizeService } from '../services/resize.service';

@Component({
  template: '<p atgResize>Testing Directives is awesome!</p>',
})
class TestComponent {}

describe('ResizeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let resizeDirective: ResizeDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ResizeDirective],
      providers: [
        ResizeDirective,
        MockProvider({
          provider: ResizeService,
          methods: ['setBlockSize'],
        }),
      ],
    });
    resizeDirective = TestBed.get(ResizeDirective);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component and di', () => {
    expect(component).toBeDefined();
  });

  it('should be initialization', () => {
    expect(resizeDirective).toBeTruthy();
  });
});
