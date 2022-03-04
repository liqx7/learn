// 滑动窗口，随时得到窗口里的某一状态
// 任何窗口变化，得到窗口中的最小值

class slideWindowMinArray {
  constructor(arr) {
    this.l = 0;
    this.r = 0;
    this.help = [];
    this.arr = arr === undefined ? null : arr;
    // this.res = [];
  }

  moveL() {
    if (this.l >= this.r) {
      return;
    }
    // 当前l要过期

    if (this.l == this.help[0]) {
      this.help.shift();
    }
    // l移动的时候给出当前窗口的最小值
    this.l++;
  }

  moveR() {
    this.r++;
    if (this.r >= this.arr.length) {
      return;
    }

    while (this.help.length > 0) {
      let tail = this.help.pop();
      if (this.arr[tail] < this.arr[this.r]) {
        this.help.push(tail);
        break;
      }
    }
    this.help.push(this.r);
  }

  printRes() {
    return this.arr[this.help[0]];
  }
}

function test() {
  let arr = [4, 5, 2, 9, 8, 1, 3];
  let sw = new slideWindowMinArray(arr);
  sw.moveR();
  sw.moveR();
  while (sw.r < sw.arr.length) {
    console.log("----", sw.printRes());
    sw.moveR();
    sw.moveL();
  }
}

test();
