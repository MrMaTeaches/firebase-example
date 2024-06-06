import { Canvas } from "./canvas.js";
import { nanoid } from "nanoid";
class Hero {
    h = 25;
    w = 25;
    x = Math.random() * Canvas.WIDTH - this.w;
    y = Math.random() * Canvas.HEIGHT - this.h;
    colour = `rgb(${this.randomizer(255)}, ${this.randomizer(255)}, ${this.randomizer(255)})`;
    moveSpeed = 1;
    id = nanoid(10);
    moveRight() {
        this.x += this.moveSpeed;
    }
    moveLeft() {
        this.x -= this.moveSpeed;
    }
    moveUp() {
        this.y -= this.moveSpeed;
    }
    moveDown() {
        this.y += this.moveSpeed;
    }
    draw() {
        Canvas.instance.context.fillStyle = this.colour;
        Canvas.instance.context.fillRect(this.x, this.y, this.w, this.h);
    }
    randomizer(val) {
        return Math.floor(Math.random() * val);
    }
}
export { Hero };
//# sourceMappingURL=hero.js.map