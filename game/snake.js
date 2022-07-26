export default class Snake {
  constructor({
    length = 3,
    width = 10,
    height = 10,
    direction = "right",
  } = {}) {
    this.list = [];

    this.length = length;
    this.width = width;
    this.height = height;
    this.direction = direction;

    this.body = [
      { x: 4, y: 3, color: "red" },
      { x: 3, y: 3, color: "green" },
      { x: 2, y: 3, color: "green" },
    ];

    this.timer = null;
  }

  render(map) {
    this.remove();

    this.body.forEach((v) => {
      let vx = this.width * v.x;
      let vy = this.height * v.y;
      let div = document.createElement("div");
      div.style.position = "absolute";
      div.style.left = vx + "px";
      div.style.top = vy + "px";
      div.style.width = this.width + "px";
      div.style.height = this.height + "px";
      div.style.background = v.color;

      map.appendChild(div);
      this.list.push(div);
    });
  }

  move(map, food) {
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }

    let head = this.body[0];
    switch (this.direction) {
      case "left":
        head.x--;
        break;
      case "right":
        head.x++;
        break;
      case "up":
        head.y--;
        break;
      case "down":
        head.y++;
        break;
      default:
        break;
    }
    this.render(map);

    if (head.x === food.x && head.y === food.y) {
      console.log(`------1------`);
      console.log(1);
      let last = this.body[this.body.length - 1];
      this.body.push({ x: last.x, y: last.y, color: last.color });
      food.render(map);
    }
  }

  remove() {
    for (let i = this.list.length - 1; i >= 0; i--) {
      this.list[i].parentNode.removeChild(this.list[i]);
      this.list.splice(i, 1);
    }
  }
}
