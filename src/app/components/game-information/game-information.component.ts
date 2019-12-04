import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'atg-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss'],
})
export class GameInformationComponent implements OnInit, OnDestroy {
  public numberLines: number;
  private subscriptionLines: Subscription;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.numberLines = 0;
    this.subscriptionLines = this.gameService.onUpdateNumberLines().subscribe((quantity) => {
      this.numberLines = this.numberLines + quantity;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionLines.unsubscribe();
  }
}
