import Food from "./food.js";
import Snake from "./snake.js";

export default class Game {
  constructor(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    this.timeId = null;
  }

  start() {
    this.food.render(this.map);
    this.snake.render(this.map);
    this.bindKey();
    this.runSnake();
  }

  bindKey() {
    document.addEventListener("keydown", (e) => {
      e.stopPropagation();
      e.preventDefault();
      switch (e.keyCode) {
        case 38:
          this.snake.direction = "up";
          break;
        case 40:
          this.snake.direction = "down";
          break;
        case 37:
          this.snake.direction = "left";
          break;
        case 39:
          this.snake.direction = "right";
          break;
        default:
          break;
      }
    });
  }

  runSnake() {
    if (this.timeId) {
      clearInterval(this.timeId);
    }
    this.timeId = setInterval(() => {
      this.snake.move(this.map, this.food);

      let maxX = this.map.offsetWidth / this.snake.width;
      let maxY = this.map.offsetHeight / this.snake.height;
      let headX = this.snake.body[0].x;
      let headY = this.snake.body[0].y;

      if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
        alert("game over");
        clearInterval(this.timeId);
        return;
      }
    }, 100);
  }
}
