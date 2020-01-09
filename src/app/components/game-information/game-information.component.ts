import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { GameService } from '../../services/game.service';
import { GameStatsObject } from '../../interfaces/game-stats.interface';

@Component({
  selector: 'atg-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss'],
})
export class GameInformationComponent {
  public gameStats$: Observable<GameStatsObject>;

  constructor(private gameService: GameService) {
    this.gameStats$ = this.gameService.onUpdateGameInformation();
  }
}
