import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameControlOptionComponent } from './components/game-control-option/game-control-option.component';
import { GameLeaderboardComponent } from './components/game-leaderboard/game-leaderboard.component';
import { GameMainComponent } from './components/game-main/game-main.component';
import { GameLoginFormComponent } from './components/game-login-form/game-login-form.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { GameOtherPlayerComponent } from './components/game-other-player/game-other-player.component';
import { GameObserveComponent } from './components/game-observe/game-observe.component';

const routes: Routes = [
  { path: 'option', component: GameControlOptionComponent },
  { path: 'leaderboard', component: GameLeaderboardComponent },
  { path: 'game', component: GameMainComponent },
  { path: 'login', component: GameLoginFormComponent },
  { path: 'profile', component: PlayerProfileComponent },
  { path: 'spectate', component: GameObserveComponent },
  { path: 'spectate/:name', component: GameOtherPlayerComponent },
  { path: '**', redirectTo: '/game', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
