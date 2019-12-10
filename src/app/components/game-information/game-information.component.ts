import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'atg-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss'],
})
export class GameInformationComponent implements OnInit {
  public initialLines: number;
  public initialScore: number;
  public initialLevel: number;

  private observableLines$: Observable<{
    lines: number;
    score: number;
    level: number;
  }>;

  constructor(private gameService: GameService) {
    this.initialLines = 0;
    this.initialScore = 0;
    this.initialLevel = 1;
  }

  ngOnInit(): void {
    this.observableLines$ = this.gameService.onUpdateGameInformation();
  }
}
