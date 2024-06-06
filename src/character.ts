import { Canvas } from "./canvas.js";
//@ts-ignore Import module
import { nanoid } from "https://cdnjs.cloudflare.com/ajax/libs/nanoid/3.3.4/nanoid.min.js";

class Character {
  protected h: number = 25;
  protected w: number = 25;
  protected _x: number = Math.random() * Canvas.WIDTH - this.w;
  protected _y: number = Math.random() * Canvas.HEIGHT - this.h;
  protected _colour: string = `rgb(${this.randomizer(255)}, ${this.randomizer(
    255
  )}, ${this.randomizer(255)})`;
  constructor(colour?: string) {
    if (colour) {
      this._colour = colour;
    }
  }

  protected randomizer(val: number): number {
    return Math.floor(Math.random() * val);
  }
  
  public draw(): void {
    Canvas.instance.context.fillStyle = this._colour;
    Canvas.instance.context.fillRect(this._x, this._y, this.w, this.h);
  }
}

class Player extends Character {
  private moveSpeed = 1;
  private _id: string = nanoid(10);

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public get colour(): string {
    return this._colour;
  }

  public get id(): string {
    return this._id;
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
}

export { Character, Player };
