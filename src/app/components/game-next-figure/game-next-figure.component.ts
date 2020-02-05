import { Subscription } from 'rxjs';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { BoardModel } from '../../models/board.model';
import { GameService } from '../../services/game.service';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { LocalStorage } from '../../enums/local-storage.enum';
import {
  BLOCK_SIZE,
  BLOCK_SIZE_MOBILE,
  BREAKPOINT_TABLET,
} from '../../constants/board-component.const';

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

  constructor(private gameService: GameService) {}

  @HostListener('window:resize', ['$event']) onResize({ target }: { target: Window }): void {
    if (target.innerWidth > BREAKPOINT_TABLET) {
      this.blockSize = BLOCK_SIZE;
    } else {
      this.blockSize = BLOCK_SIZE_MOBILE;
    }
    if (this.nextFigure) {
      this.setInitialState(this.nextFigure);
    }
  }

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event): void {
    event.preventDefault();
    if (!this.isLostGame) {
      localStorage.setItem(LocalStorage.NEXT_FIGURE, JSON.stringify(this.nextFigure));
    }
  }

  ngOnInit(): void {
    if (window.innerWidth > BREAKPOINT_TABLET) {
      this.blockSize = BLOCK_SIZE;
    } else {
      this.blockSize = BLOCK_SIZE_MOBILE;
    }
    this.ctx = this.nextCanvas.nativeElement.getContext('2d');
    this.subscriptionNext = this.gameService
      .onNewFigureCreated()
      .subscribe(({ randomNextFigure }) => {
        this.setInitialState(randomNextFigure);
      });

    this.subscriptionLost = this.gameService.onLostGame().subscribe(() => {
      this.isLostGame = true;
    });

    if (!localStorage.getItem(LocalStorage.GAME_STATS)) {
      this.gameService.updateFigures();
    }

    if (localStorage.getItem(LocalStorage.NEXT_FIGURE)) {
      this.setInitialState(JSON.parse(localStorage.getItem(LocalStorage.NEXT_FIGURE)));
    }
  }

  ngOnDestroy(): void {
    this.subscriptionNext.unsubscribe();
    if (!this.isLostGame) {
      localStorage.setItem(LocalStorage.NEXT_FIGURE, JSON.stringify(this.nextFigure));
    }
  }

  private setInitialState(nextFigure: FiguresColors[][]): void {
    const newBoard = new BoardModel(this.ctx, true);
    this.nextFigure = nextFigure;
    this.nextCanvas.nativeElement.width = this.nextFigure[0].length * this.blockSize;
    this.nextCanvas.nativeElement.height = this.nextFigure.length * this.blockSize;
    newBoard.drawBoard(this.nextFigure, this.blockSize);
  }
}
