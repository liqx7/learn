// 创业者安排项目

const { genRandomArr, genRandomNum, swap } = require("../utils");

class Node {
  constructor(p, c) {
    this.p = p;
    this.c = c;
  }
}

// 花费的小根堆
function minCostComparator(o1, o2) {
  return o1.c > o2.c;
}

// 收益的大根堆
function maxPeofitComparator(o1, o2) {
  return o1.p < o2.p;
}

class Heap {
  constructor(comparator) {
    this.arr = [];
    this.comparator = comparator;
  }

  cpr(i, j) {
    return this.comparator(this.arr[i], this.arr[j]);
  }

  size() {
    return this.arr.length;
  }

  peek() {
    if (this.arr.length < 1) {
      return null;
    }
    return this.arr[0];
  }

  add(o) {
    this.arr.push(o);
    let index = this.arr.length - 1;
    let pIndex = parseInt((index - 1) / 2);

    while (index !== pIndex) {
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
    if (this.arr.length === 0) {
      return null;
    }
    if (this.arr.length === 1) {
      return this.arr.pop();
    }

    if (this.arr.length > 1) {
      let o = this.arr[0];
      this.arr[0] = this.arr.pop();
      this.heapify(0);
    }
  }

  heapify(index) {
    let leftIndex = index * 2 + 1;
    let rightIndex = leftIndex + 1;
    let prevIndex = index;

    while (leftIndex < this.arr.length) {
      if (rightIndex < this.arr.length && this.cpr(leftIndex, rightIndex)) {
        prevIndex = rightIndex;
      } else {
        prevIndex = leftIndex;
      }

      if (this.cpr(index, prevIndex)) {
        swap(this.arr, index, prevIndex);
        index = prevIndex;
        leftIndex = index * 2 + 1;
        rightIndex = leftIndex + 1;
      } else {
        break;
      }
    }
  }
}

function findMaxCapital(k, w, pArr, cArr) {
  let arr = new Array(pArr.length);
  for (let i = 0; i < pArr.length; i++) {
    arr[i] = new Node(pArr[i], cArr[i]);
  }

  let minCostH = new Heap(minCostComparator);
  let maxProH = new Heap(maxPeofitComparator);

  for (let i = 0; i < k; i++) {
    // 次数
    // 将所有小于花费的项目放到大根堆
    while (minCostH.size() > 0 && minCostH.peek().c <= w) {
      maxProH.add(minCostH.poll());
    }
    if (maxProH.size() === 0) {
      return w;
    }
    w += maxProH.poll().p;
  }
  return w;
}

function comparator(k, w, pArr, cArr) {
  let arr = new Array(pArr.length);
  for (let i = 0; i < pArr.length; i++) {
    arr[i] = new Node(pArr[i], cArr[i]);
  }

  return process(arr, k, w);
}

function process(arr, k, w) {
  if (k < 1) {
    return 0;
  }
  if (k == 1) {
    if (arr[0].c < w) {
      return arr[0].p;
    } else {
      return 0;
    }
  }
  let maxPro = 0;
  for (let i = 0; i < arr.length; i++) {
    // 每一个要不要
    if (arr[0].c < w) {
      let arr1 = [...arr];
      arr1.splice(0, 1);
      let pro = arr[0].p + process(arr1, k - 1, w - arr[0].c);
      maxPro = Math.max(pro, maxPro);
    } else {
      break;
    }
  }

  return maxPro;
}

function main() {
  let testTimes = 50;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    // let parr = genRandomArr(maxSize, maxValue);
    // let carr = genRandomArr(maxSize, maxValue);

    // let k = genRandomNum(100);
    // let w = genRandomNum(20);

    // if (findMaxCapital(k, w, parr, carr) !== comparator(k, w, parr, carr)) {
    //   succeed = false;
    //   console.log(`------parr,carr,k,w------`);
    //   console.log(parr, carr, k, w);
    // }

    let arr = genRandomArr(maxSize, maxValue);
    let h = new Heap((a, b) => a > b);
    for (let j = 0; j < arr.length; j++) {
      h.add(arr[j]);
    }
    console.log(`------arr,h.peek()------`);
    console.log(arr, h.peek());
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
