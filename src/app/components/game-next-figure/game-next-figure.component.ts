import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { BoardModel } from '../../models/board.model';
import { GameService } from '../../services/game.service';
import { BLOCK_SIZE } from '../../constants/board-component.const';

@Component({
  selector: 'atg-game-next-figure',
  templateUrl: './game-next-figure.component.html',
  styleUrls: ['./game-next-figure.component.scss'],
})
export class GameNextFigureComponent implements OnInit, OnDestroy {
  @ViewChild('nextCanvas', { static: true }) private nextCanvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private nextFigure: FiguresColors[][];
  private subscriptionNext: Subscription;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.ctx = this.nextCanvas.nativeElement.getContext('2d');
    this.subscriptionNext = this.gameService.onUpdateFigures().subscribe(() => {
      this.setInitialState();
    });
    this.setInitialState();
  }

  ngOnDestroy(): void {
    this.subscriptionNext.unsubscribe();
  }

  private setInitialState(): void {
    const newBoard = new BoardModel(this.ctx);
    this.nextFigure = this.gameService.nextFigure;
    this.nextCanvas.nativeElement.width = this.nextFigure[0].length * BLOCK_SIZE;
    this.nextCanvas.nativeElement.height = this.nextFigure.length * BLOCK_SIZE;
    newBoard.drawBoard(this.nextFigure, true);
  }
}
