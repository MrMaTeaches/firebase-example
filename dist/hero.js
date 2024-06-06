import { Canvas } from "./canvas.js";
import { nanoid } from "nanoid";
class Hero {
    h = 25;
    w = 25;
    _x = Math.random() * Canvas.WIDTH - this.w;
    _y = Math.random() * Canvas.HEIGHT - this.h;
    _colour = `rgb(${this.randomizer(255)}, ${this.randomizer(255)}, ${this.randomizer(255)})`;
    moveSpeed = 1;
    id = nanoid(10);
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get colour() {
        return this._colour;
    }
    moveRight() {
        this._x += this.moveSpeed;
    }
    moveLeft() {
        this._x -= this.moveSpeed;
    }
    moveUp() {
        this._y -= this.moveSpeed;
    }
    moveDown() {
        this._y += this.moveSpeed;
    }
    draw() {
        Canvas.instance.context.fillStyle = this._colour;
        Canvas.instance.context.fillRect(this._x, this._y, this.w, this.h);
    }
    randomizer(val) {
        return Math.floor(Math.random() * val);
    }
}
export { Hero };
//# sourceMappingURL=hero.js.map