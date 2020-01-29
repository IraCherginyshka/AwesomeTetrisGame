import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptor } from './services/authconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { GameMainComponent } from './components/game-main/game-main.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameControlsComponent } from './components/game-controls/game-controls.component';
import { GameStateControlsComponent } from './components/game-state-controls/game-state-controls.component';
import { GameInformationComponent } from './components/game-information/game-information.component';
import { GameControlOptionComponent } from './components/game-control-option/game-control-option.component';
import { GameLeaderboardComponent } from './components/game-leaderboard/game-leaderboard.component';
import { GameLoaderComponent } from './components/game-loader/game-loader.component';
import { GameNextFigureComponent } from './components/game-next-figure/game-next-figure.component';
import { GameLoginFormComponent } from './components/game-login-form/game-login-form.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { PlayerProfileHeaderComponent } from './components/player-profile-header/player-profile-header.component';
import { GameOtherPlayerComponent } from './components/game-other-player/game-other-player.component';
import { GameObserveComponent } from './components/game-observe/game-observe.component';

@NgModule({
  declarations: [
    AppComponent,
    GameHeaderComponent,
    GameMainComponent,
    GameBoardComponent,
    GameControlsComponent,
    GameStateControlsComponent,
    GameInformationComponent,
    GameControlOptionComponent,
    GameLeaderboardComponent,
    GameLoaderComponent,
    GameNextFigureComponent,
    GameLoginFormComponent,
    PlayerProfileComponent,
    PlayerProfileHeaderComponent,
    GameOtherPlayerComponent,
    GameObserveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ToastContainerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
