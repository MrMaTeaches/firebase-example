import { Canvas } from "./canvas.js";
import { nanoid } from "nanoid";

class Hero {
  private h: number = 25;
  private w: number = 25;
  private x: number = Math.random() * Canvas.WIDTH - this.w;
  private y: number = Math.random() * Canvas.HEIGHT - this.h;
  private colour: string = `rgb(${this.randomizer(255)}, ${this.randomizer(
    255
  )}, ${this.randomizer(255)})`;
  private moveSpeed = 1;
  private id: string = nanoid(10);

  public moveRight(): void {
    this.x += this.moveSpeed;
  }
  public moveLeft(): void {
    this.x -= this.moveSpeed;
  }
  public moveUp(): void {
    this.y -= this.moveSpeed;
  }
  public moveDown(): void {
    this.y += this.moveSpeed;
  }

  public draw(): void {
    Canvas.instance.context.fillStyle = this.colour;
    Canvas.instance.context.fillRect(this.x, this.y, this.w, this.h);
  }

  private randomizer(val: number): number {
    return Math.floor(Math.random() * val);
  }
}

export { Hero };
