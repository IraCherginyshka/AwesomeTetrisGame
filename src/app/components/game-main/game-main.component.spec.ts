import { ToastrService } from 'ngx-toastr';
import { MockComponent } from 'ng2-mock-component';
import { MockProvider } from 'ngx-mock-provider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GameMainComponent } from './game-main.component';

describe('GameMainComponent', () => {
  let component: GameMainComponent;
  let fixture: ComponentFixture<GameMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [
        GameMainComponent,
        MockComponent({ selector: 'atg-game-information' }),
        MockComponent({ selector: 'atg-game-board' }),
        MockComponent({ selector: 'atg-game-next-figure' }),
        MockComponent({ selector: 'atg-game-state-controls' }),
        MockComponent({ selector: 'atg-game-controls' }),
      ],
      providers: [
        MockProvider({
          provider: ToastrService,
          methods: ['warning', 'error', 'success'],
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMainComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
