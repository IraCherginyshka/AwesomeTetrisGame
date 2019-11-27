import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../services/game.service';
import { FigureModel } from '../../models/figure.model';
import { BoardModel } from '../../models/board.model';
import { FiguresColors } from '../../enums/figures-colors.enum';
import { FiguresMovement } from '../../enums/figures-movement.enum';
import { GameState } from '../../enums/game-state.enum';
import {
  QUANTITY_BLOCKS_WIDTH,
  QUANTITY_BLOCKS_HEIGHT,
  DELAY_FIRST_LEVEL,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CENTRAL_ITEM,
} from '../../constants/board-component.const';

@Component({
  selector: 'atg-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit, OnDestroy {
  public isPlaying: boolean;
  @ViewChild('canvas', { static: true }) private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private boardMatrix: FiguresColors[][];
  private subscriptionState: Subscription;
  private subscriptionMove: Subscription;
  private figurePosition: number;
  private timeInterval: number;
  private lineWithFigure: number;
  private currentFigure: FiguresColors[][];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.canvas.nativeElement.width = CANVAS_WIDTH;
    this.canvas.nativeElement.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.boardMatrix = BoardModel.makeBoardEmptyMatrix(
      QUANTITY_BLOCKS_WIDTH,
      QUANTITY_BLOCKS_HEIGHT,
    );
    this.setInitialBoardState();

    this.subscriptionState = this.gameService.getGameState().subscribe((gameState: GameState) => {
      this.isPlaying = this.gameService.isPlaying;
      if (gameState === GameState.RESET) {
        this.resetGame();
      }
      if (gameState === GameState.PAUSE) {
        this.stopGame();
      }
      if (gameState === GameState.PLAY) {
        this.playGame();
      }
    });

    this.subscriptionMove = this.gameService
      .onNextStep()
      .subscribe((nextPosition: FiguresMovement) => {
        if (nextPosition === FiguresMovement.LEFT) {
          this.figurePosition -= 1;
        }
        if (nextPosition === FiguresMovement.RIGHT) {
          this.figurePosition += 1;
        }
        if (nextPosition === FiguresMovement.ROTATE) {
          this.currentFigure = this.rotateFigure(this.currentFigure);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptionState.unsubscribe();
    this.subscriptionMove.unsubscribe();
  }

  private rotateFigure(figureMatrix: FiguresColors[][]): FiguresColors[][] {
    const reverseMatrix = [...figureMatrix];
    reverseMatrix.reverse();
    return reverseMatrix[0].map((item, index) => reverseMatrix.map((line) => line[index]));
  }

  private setInitialBoardState(): void {
    this.lineWithFigure = 0;
    this.figurePosition = CENTRAL_ITEM;
    this.currentFigure = this.gameService.currentFigure;
  }

  private playGame(): void {
    const newFigure = new FigureModel();
    const newBoard = new BoardModel(this.ctx);
    this.timeInterval = window.setInterval(() => {
      newBoard.drawBoard(
        newFigure.showFigure(
          this.lineWithFigure,
          this.currentFigure,
          this.boardMatrix,
          this.figurePosition,
        ),
        false,
      );
      if (this.lineWithFigure + this.currentFigure.length === QUANTITY_BLOCKS_HEIGHT) {
        this.gameService.updateFigures();
        this.setInitialBoardState();
      } else {
        this.lineWithFigure += 1;
      }
    }, DELAY_FIRST_LEVEL);
  }

  private stopGame(): void {
    clearInterval(this.timeInterval);
  }

  private resetGame(): void {
    clearInterval(this.timeInterval);
    this.setInitialBoardState();
    this.playGame();
  }
}
