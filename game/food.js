import { getRandom } from "./utils.js";

export default class Food {
  constructor({ x = 0, y = 0, width = 10, height = 10 } = {}) {
    this.list = [];

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  render(map) {
    this.remove();

    this.x = getRandom(0, map.offsetWidth / this.width - 10);
    this.y = getRandom(0, map.offsetHeight / this.height - 1);

    let div = document.createElement("div");

    div.style.position = "absolute";
    div.style.left = this.x * this.width + "px";
    div.style.top = this.y * this.height + "px";
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.background = "green";
    this.list.push(div);
    map.appendChild(div);
  }

  remove() {
    for (let i = this.list.length - 1; i >= 0; i--) {
      this.list[i].parentNode.removeChild(this.list[i]);
      this.list.splice(i, 1);
    }
  }
}
