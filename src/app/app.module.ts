import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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

const appRouter: Routes = [
  { path: 'option', component: GameControlOptionComponent },
  { path: 'leaderboard', component: GameLeaderboardComponent },
  { path: 'game', component: GameMainComponent },
  { path: 'login', component: GameLoginFormComponent },
  { path: '**', redirectTo: '/game', pathMatch: 'full' },
];

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter),
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
