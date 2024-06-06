import { Canvas } from "./canvas.js";
import {
  MoveDownCommand,
  MoveLeftCommand,
  MoveRightCommand,
  MoveUpCommand,
} from "./command.js";
import { Controller } from "./controller.js";
import { Hero } from "./hero.js";

class Game {
  private FPS: number = 60;
  private timeInterval: number = 1000 / this.FPS;
  private hero: Hero = new Hero();
  private controller: Controller = new Controller(
    new MoveUpCommand(this.hero),
    new MoveLeftCommand(this.hero),
    new MoveDownCommand(this.hero),
    new MoveRightCommand(this.hero)
  );
  constructor() {
    setInterval(() => {
      this.updateEverything();
      this.drawEverything();
    }, this.timeInterval);
  }
  public updateEverything(): void {
    this.controller.keyPressHandler();
  }
  public drawEverything(): void {
    Canvas.instance.context.clearRect(0, 0, Canvas.WIDTH, Canvas.HEIGHT);
    this.hero.draw();
  }
}

export { Game };
