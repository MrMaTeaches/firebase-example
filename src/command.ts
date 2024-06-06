import { Hero } from "./hero";
import { update, ref } from "firebase/database";

interface Command {
  execute(): void;
}

class MoveRightCommand {
  constructor(private hero: Hero) {}

  public execute(): void {
    this.hero.moveRight();
  }
}
class MoveLeftCommand {
  constructor(private hero: Hero) {}

  public execute(): void {
    this.hero.moveLeft();
  }
}
class MoveUpCommand {
  constructor(private hero: Hero) {}

  public execute(): void {
    this.hero.moveUp();
  }
}
class MoveDownCommand {
  constructor(private hero: Hero) {}

  public execute(): void {
    this.hero.moveDown();
  }
}

export {
  Command,
  MoveDownCommand,
  MoveLeftCommand,
  MoveRightCommand,
  MoveUpCommand,
};
