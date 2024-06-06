import { Canvas } from "./canvas.js";
import { nanoid } from "nanoid";

class Hero {
  private h: number = 25;
  private w: number = 25;
  private _x: number = Math.random() * Canvas.WIDTH - this.w;
  private _y: number = Math.random() * Canvas.HEIGHT - this.h;
  private _colour: string = `rgb(${this.randomizer(255)}, ${this.randomizer(
    255
  )}, ${this.randomizer(255)})`;
  private moveSpeed = 1;
  private id: string = nanoid(10);

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public get colour(): string {
    return this._colour;
  }

  public moveRight(): void {
    this._x += this.moveSpeed;
  }
  public moveLeft(): void {
    this._x -= this.moveSpeed;
  }
  public moveUp(): void {
    this._y -= this.moveSpeed;
  }
  public moveDown(): void {
    this._y += this.moveSpeed;
  }

  public draw(): void {
    Canvas.instance.context.fillStyle = this._colour;
    Canvas.instance.context.fillRect(this._x, this._y, this.w, this.h);
  }

  private randomizer(val: number): number {
    return Math.floor(Math.random() * val);
  }
}

export { Hero };
