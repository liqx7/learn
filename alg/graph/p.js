//  p算法生成最小生成树，从点的角度

const { swap } = require("../utils");

function p(graph) {
  let nodeSet = new Set();

  let node = graph.values()[0];
  // 第一个点进入

  // 构造小根堆
  let h = new Heap((a, b) => a.value > b.value);

  let result = new Set();

  while (nodeSet.length !== graph.nodes.length) {
    //加一个点
    nodeSet.add(node);
    // 点的边加入堆
    for (let v of node.edges) {
      h.add(v);
    }
    // 取出最小的边
    let minEdge = null;
    while (!h.isEmpty()) {
      minEdge = h.poll();
      if (!nodeSet.has(minEdge.to)) {
        node = minEdge.to;
        result.add(minEdge);
        nodeSet.add(node);
        for (let v of node.edges) {
          h.add(v);
        }
        break;
      }
    }
  }
}

class Heap {
  constructor(compare) {
    this.compare = compare;
    this.arr = [];
  }

  add(node) {
    this.heapInsert(node);
  }

  poll() {
    let node = this.arr.shift();

    if (this.arr.length > 0) {
      this.arr.unshift(this.arr.pop());
      this.heapify(0);
    }
    return node;
  }

  heapInsert(node) {
    this.arr.push(node);

    let index = this.arr.length - 1;

    let parentIndex = parseInt((index - 1) / 2);
    while (parentIndex !== index) {
      if (this.compare(this.arr[parentIndex], this.arr[index])) {
        swap(this.arr, parentIndex, index);
        index = parentIndex;
        parentIndex = parentIndex = parseInt((index - 1) / 2);
      } else {
        break;
      }
    }
  }

  heapify(index) {
    let leftIndex = 2 * index + 1;
    let rightIndex = leftIndex + 1;
    let prevIndex = index;
    while (leftIndex < this.arr.length) {
      if (
        rightIndex < this.arr.length &&
        this.compare(this.arr[leftIndex], this.arr[rightIndex])
      ) {
        prevIndex = rightIndex;
      } else {
        prevIndex = leftIndex;
      }
      if (this.compare(this.arr[index], this.arr[prevIndex])) {
        swap(this.arr, index, prevIndex);
        index = prevIndex;
        leftIndex = index * 2 + 1;
        rightIndex = leftIndex + 1;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  print() {
    console.log(`------this.arr------`);
    console.log(this.arr);
  }
}

function test() {
  let h = new Heap((a, b) => a > b);

  let arr = [7, 8, 4, 2, 5, 3, 9];

  for (let i = 0; i < arr.length; i++) {
    h.add(arr[i]);
  }

  h.print();

  while (!h.isEmpty()) {
    console.log(h.poll());
  }
}

test();
