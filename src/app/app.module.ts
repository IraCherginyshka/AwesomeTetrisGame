import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    GameLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
