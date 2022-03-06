// 切金条问题

function LessMoneySplitGold(arr) {
  if (arr == null) {
    return;
  }
  let res = 0;

  let heap = new Heap((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    heap.add(arr[i]);
  }

  while (heap.size() > 1) {
    let h1 = heap.poll();
    let h2 = heap.poll();
    res += h1 + h2;

    heap.add(h1 + h2);
  }

  return res;
}

class Heap {
  constructor(compare) {
    this.arr = [];
    this.compare = compare;
  }

  cpr(i, j) {
    return this.compare(this.arr[i], this.arr[j]) > 0;
  }

  add(node) {
    this.arr.push(node);
    let index = this.arr.length - 1;
    let pIndex = parseInt((index - 1) / 2);
    while (pIndex !== index) {
      if (this.cpr(pIndex, index)) {
        swap(this.arr, pIndex, index);
        index = pIndex;
        pIndex = parseInt((index - 1) / 2);
      } else {
        break;
      }
    }
  }

  poll() {
    // 总是忘记
    if (this.arr.length < 2) {
      return this.arr.pop();
    }
    let node = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.heapify(0);
    return node;
  }

  heapify(index) {
    let leftIndex = index * 2 + 1;
    let rightIndex = leftIndex + 1;

    let prevIndex = index;

    while (leftIndex < this.arr.length) {
      prevIndex =
        rightIndex < this.arr.length && this.cpr(leftIndex, rightIndex)
          ? rightIndex
          : leftIndex;

      if (this.cpr(index, prevIndex)) {
        swap(this.arr, index, prevIndex);
        index = prevIndex;
        leftIndex = index * 2 + 1;
        rightIndex = index + 1;
      } else {
        break;
      }
    }
  }

  size() {
    return this.arr.length;
  }
}

function process(arr) {
  if (arr == null || arr.length < 2) {
    return 0;
  }
  if (arr.length == 2) {
    return arr[0] + arr[1];
  }

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let arr1 = [...arr];
    arr1.splice(i, 1);
    res.push(arr[i] + arr1.reduce((pre, cur) => pre + cur, 0) + process(arr1));
  }
  res.sort((a, b) => a - b);
  return res[0];
}
function genArr(maxSize, maxValue) {
  let arr = new Array(genNum(maxSize));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = genNum(maxValue);
  }

  return arr;
}

function genNum(maxValue) {
  return parseInt(maxValue * Math.random()) + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function main() {
  let testTimes = 50;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  // for (let i = 0; i < testTimes; i++) {
  //   let arr = genArr(maxSize, maxValue);
  //   let arr1 = [...arr];

  //   let res1 = LessMoneySplitGold(arr);
  //   let res2 = process(arr1);

  //   if (res1 != res2) {
  //     succeed = false;
  //     console.log(`------arr,res1,res2------`);
  //     console.log(arr, res1, res2);
  //   }
  // }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);

  let a = [2, 7, 2, 4, 6];
  let h = new Heap((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    h.add(a[i]);
  }
  // console.log(`------h.arr------`);
  // console.log(h.arr);

  console.log(`------------`);
  console.log(LessMoneySplitGold(a));

  console.log(`------process(a-)-----`);
  console.log(process(a));
}

main();
