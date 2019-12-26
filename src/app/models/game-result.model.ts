export class GameResult {
  username: string;
  lines: number;
  score: number;
  level: number;

  constructor(result: GameResult) {
    this.username = result.username;
    this.lines = result.lines;
    this.score = result.score;
    this.level = result.level;
  }
}
