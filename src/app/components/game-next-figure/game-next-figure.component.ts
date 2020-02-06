import { Subscription } from 'rxjs';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { BoardModel } from '../../models/board.model';
import { GameService } from '../../services/game.service';
import { ResizeService } from '../../services/resize.service';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { LocalStorage } from '../../enums/local-storage.enum';

@Component({
  selector: 'atg-game-next-figure',
  templateUrl: './game-next-figure.component.html',
  styleUrls: ['./game-next-figure.component.scss'],
})
export class GameNextFigureComponent implements OnInit, OnDestroy {
  @ViewChild('nextCanvas', { static: true }) private nextCanvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private nextFigure: FiguresColors[][];
  private isLostGame = false;
  private blockSize: number;
  private subscriptionNext: Subscription;
  private subscriptionLost: Subscription;
  private subscriptionResize: Subscription;

  constructor(private gameService: GameService, private resizeService: ResizeService) {}

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event): void {
    event.preventDefault();
    if (!this.isLostGame) {
      localStorage.setItem(LocalStorage.NEXT_FIGURE, JSON.stringify(this.nextFigure));
    }
  }

  ngOnInit(): void {
    this.ctx = this.nextCanvas.nativeElement.getContext('2d');

    this.subscriptionResize = this.resizeService.onResizeBlock().subscribe(() => {
      this.setInitialState(this.nextFigure);
    });

    this.subscriptionNext = this.gameService
      .onNewFigureCreated()
      .subscribe(({ randomNextFigure }) => {
        this.setInitialState(randomNextFigure);
      });

    this.subscriptionLost = this.gameService.onLostGame().subscribe(() => {
      this.isLostGame = true;
    });

    const nextFigureLS = JSON.parse(localStorage.getItem(LocalStorage.NEXT_FIGURE));

    if (!nextFigureLS) {
      this.gameService.updateFigures();
    } else {
      this.setInitialState(nextFigureLS);
    }
  }

  ngOnDestroy(): void {
    this.subscriptionNext.unsubscribe();
    this.subscriptionResize.unsubscribe();

    if (!this.isLostGame) {
      localStorage.setItem(LocalStorage.NEXT_FIGURE, JSON.stringify(this.nextFigure));
    }
  }

  private setInitialState(nextFigure: FiguresColors[][]): void {
    const newBoard = new BoardModel(this.ctx, true);
    this.nextFigure = nextFigure;
    this.blockSize = this.resizeService.blockSize;
    this.nextCanvas.nativeElement.width = this.nextFigure[0].length * this.blockSize;
    this.nextCanvas.nativeElement.height = this.nextFigure.length * this.blockSize;
    newBoard.drawBoard(this.nextFigure, this.blockSize);
  }
}
