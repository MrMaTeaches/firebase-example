class MoveRightCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        this.hero.moveRight();
    }
}
class MoveLeftCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        this.hero.moveLeft();
    }
}
class MoveUpCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        this.hero.moveUp();
    }
}
class MoveDownCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        this.hero.moveDown();
    }
}
export { MoveDownCommand, MoveLeftCommand, MoveRightCommand, MoveUpCommand, };
//# sourceMappingURL=command.js.map