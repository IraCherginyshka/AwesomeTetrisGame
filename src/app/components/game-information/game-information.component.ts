import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { GameService } from '../../services/game.service';
import { GameStatsObject } from '../../interfaces/game-stats.interface';
import { LocalStorage } from '../../enums/local-storage.enum';

@Component({
  selector: 'atg-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss'],
})
export class GameInformationComponent {
  public gameStats$: Observable<GameStatsObject>;
  public isCustomControls = !!localStorage.getItem(LocalStorage.CONTROLS);

  constructor(private gameService: GameService) {
    this.gameStats$ = this.gameService.onUpdateGameInformation();
  }
}
