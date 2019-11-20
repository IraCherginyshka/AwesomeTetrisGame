import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FigureModel } from '../../models/figure.model';
import { MatrixModel } from '../../models/matrix.model';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { GameStateService } from '../../services/game-state.service';
import { GameState } from '../../enums/game-state.enum';
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  DELAY_FIRST_LEVEL,
  QUANTITY_BLOCKS_HEIGHT,
  QUANTITY_BLOCKS_WIDTH,
} from '../../constants/board-component.const';

@Component({
  selector: 'atg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private boardMatrix: FiguresColors[][];
  private subscription: Subscription;
  private timeInterval: number;
  private lineWithFigure: number;

  constructor(private gameStateService: GameStateService) {}

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.boardMatrix = MatrixModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.play();
    this.subscription = this.gameStateService.getGameState().subscribe((gameState: GameState) => {
      if (gameState === GameState.RESET) {
        this.reset();
      }
      if (gameState === GameState.PAUSE) {
        this.pause();
      }
    });
  }

  private play(): void {
    this.lineWithFigure = 0;
    const newFigure = new FigureModel();
    const itemHeight = newFigure.figureMatrix.length;
    const newMatrix = new MatrixModel(this.ctx);

    this.timeInterval = window.setInterval(() => {
      newMatrix.drawBoard(newFigure.showFigure(this.lineWithFigure, this.boardMatrix));
      if (this.lineWithFigure + itemHeight === QUANTITY_BLOCKS_HEIGHT) {
        clearInterval(this.timeInterval);
        this.play();
      } else {
        this.lineWithFigure += 1;
      }
    }, DELAY_FIRST_LEVEL);
  }

  private pause(): void {
    clearInterval(this.timeInterval);
  }

  private reset(): void {
    clearInterval(this.timeInterval);
    this.play();
  }
}
