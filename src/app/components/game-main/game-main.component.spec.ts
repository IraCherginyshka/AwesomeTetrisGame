import { ToastContainerDirective, ToastrModule } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameMainComponent } from './game-main.component';
import { GameInformationComponent } from '../game-information/game-information.component';
import { GameBoardComponent } from '../game-board/game-board.component';
import { GameNextFigureComponent } from '../game-next-figure/game-next-figure.component';
import { GameStateControlsComponent } from '../game-state-controls/game-state-controls.component';
import { GameControlsComponent } from '../game-controls/game-controls.component';

describe('GameMainComponent', () => {
  let component: GameMainComponent;
  let fixture: ComponentFixture<GameMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
      ],
      declarations: [
        GameMainComponent,
        GameInformationComponent,
        GameBoardComponent,
        GameNextFigureComponent,
        GameStateControlsComponent,
        GameControlsComponent,
        ToastContainerDirective,
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
