import { Canvas } from "./canvas.js";
import { MoveDownCommand, MoveLeftCommand, MoveRightCommand, MoveUpCommand, } from "./command.js";
import { Controller } from "./controller.js";
import { Hero } from "./hero.js";
class Game {
    FPS = 60;
    timeInterval = 1000 / this.FPS;
    hero = new Hero();
    controller = new Controller(new MoveUpCommand(this.hero), new MoveLeftCommand(this.hero), new MoveDownCommand(this.hero), new MoveRightCommand(this.hero));
    constructor() {
        setInterval(() => {
            this.updateEverything();
            this.drawEverything();
        }, this.timeInterval);
    }
    updateEverything() {
        this.controller.keyPressHandler();
    }
    drawEverything() {
        Canvas.instance.context.clearRect(0, 0, Canvas.WIDTH, Canvas.HEIGHT);
        this.hero.draw();
    }
}
export { Game };
//# sourceMappingURL=game.js.map