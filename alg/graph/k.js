// 最小生成树 k算法

const { Graph } = require("./Graph");
const { swap } = require("../utils");

function k(graph) {
  // 将边放入小跟堆
  let edgeHeap = new Heap((a, b) => a.value - b.value);

  // 准备并查集
  let unionFind = new UnionFind();
  unionFind.makeSets(graph.nodes.values());
  let res = new Graph();

  while (!edgeHeap.isEmpty()) {
    let edge = edgeHeap.pop();

    if (!unionFind.isSameSet(edge.from, edge.to)) {
      // 加入边
      res.edges.add(edge);
      unionFind.uion(edge.from, edge.to);
    }
  }

  return res;
}

// 小根堆
class Heap {
  constructor(compare) {
    this.arr = [];
    this.compare = compare;
  }

  add(node) {
    this.arr.push(node);
    this.heapInsert(node, this.arr.length - 1);
  }

  heapInsert(node, index) {
    let parentIndex = parseInt((index - 1) / 2);

    while (parentIndex != index) {
      // 如果当compare，正常顺序，对就交换

      console.log(`------this.compare(this.arr[parentIndex], node)------`);
      console.log(this.compare(this.arr[parentIndex], node));
      if (this.compare(this.arr[parentIndex], node)) {
        swap(this.arr, index, parentIndex);
      }
      index = parentIndex;
      parentIndex = parseInt((index - 1) / 2);
    }
  }

  poll() {
    let node = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.heapify(0);

    return node;
  }

  //cmpare a在前面不对
  heapify(index) {
    while (index < this.arr.length) {
      let leftIndex = index * 2 + 1;
      let rightIndex = leftIndex + 1;
      let prevIndex = null;
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
      }
      index = prevIndex;
    }
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

// 并查集
class UnionFind {
  constructor() {
    this.sets = new Set();
    this.setMap = new Map();
  }

  makeSets(arr) {
    for (let i = 0; i < arr.length; i++) {
      let set = new Set([arr[i]]);
      this.setMap.set(arr[i], set);
      this.sets.add(set);
    }
  }

  isSameSet(a, b) {
    return this.setMap.get(a) === this.setMap.get(b);
  }

  union(a, b) {
    let aSet = this.setMap.get(a);
    let bSet = this.setMap.get(b);

    for (let v of bSet) {
      aSet.add(v);
      this.setMap.set(v, aSet);
    }
  }
}

function test() {
  let arr = [3, [5, [3, [2, [6]]]]];
  while (arr.some((v) => Array.isArray(v))) {
    arr = [].concat(...arr);
  }
  console.log(`------arr------`);
  console.log(arr);

  let uf = new UnionFind();
  uf.makeSets(arr);
  console.log(uf.isSameSet(arr[0], arr[1]));
  uf.union(arr[0], arr[1]);
  console.log(uf.isSameSet(arr[0], arr[1]));

  let h = new Heap((a, b) => a > b);
  for (let i = 0; i < arr.length; i++) {
    h.add(arr[i]);
  }
  console.log(`------h.arr------`);
  console.log(h.arr);
  console.log("---", h.poll());
  console.log("---", h.poll());
  console.log("---", h.poll());
  console.log("---", h.poll());
  console.log("---", h.poll());
}

test();
