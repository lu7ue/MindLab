import Level from './Level.js';
import ScoreItem from './ScoreItem.js';
import Level2 from './Level2.js';

export default class Level1 extends Level {
  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY, 0);
    this.lanes = [160, 285, 410];
  }

  public override spawnNewItem(): void {
    if (Math.random() <= 0.3) {
      this.gameItems.push(new ScoreItem(this.lanes[0]));
    } else if (Math.random() <= 0.6) {
      this.gameItems.push(new ScoreItem(this.lanes[1]));
    } else if (Math.random() < 1) {
      this.gameItems.push(new ScoreItem(this.lanes[2]));
    }
  }

  public override nextLevel(): Level | null{
    if (this.score >= 500) {
      return new Level2(this.maxX, this.maxY);
    }
    return null;
  }
}
