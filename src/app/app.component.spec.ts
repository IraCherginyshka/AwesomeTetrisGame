import { ToastContainerDirective, ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { PlayerProfileHeaderComponent } from './components/player-profile-header/player-profile-header.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
      ],
      declarations: [
        AppComponent,
        GameHeaderComponent,
        PlayerProfileHeaderComponent,
        ToastContainerDirective,
      ],
      providers: [RouterModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'AwesomeTetrisGame'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AwesomeTetrisGame');
  });
});
