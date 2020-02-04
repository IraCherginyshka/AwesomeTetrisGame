import { FiguresColors } from '../enums/figures-colors.enum';
import { GameState } from '../enums/game-state.enum';
import { GameStatsObject } from './game-stats.interface';
import { PlayerData } from './player-data.interface';

export interface ObserveGameStatsInterface {
  player: PlayerData;
  matrix: FiguresColors[][];
  gameStatus: GameState;
  gameInformation: GameStatsObject;
}
