// 几乎有序

const { swap } = require("../../utils");

function sortArrayDidtanceLessK(arr, k) {
  if ((arr == null, arr.length < 2)) {
    return;
  }

  let index = 0;
  for (; index < Math.min(arr.length, k); index++) {
    // 先对前k个数排序,取出加到堆里
    heap.add(arr[index]);
  }
  // 前k个是小根堆，再从头确定
  // 接下来每弹出一个堆顶，就加入一个新的内容
  let i = 0;

  for (; index < arr.length; index++) {
    heap.add(arr[index]);
    arr[i] = heap.poll();
  }
}

class Heap {
  constructor() {
    this.arr = [];
  }

  add(num) {
    // arr.push(num)
    this.heapInsert(this.arr, num);
  }

  poll() {
    let res = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();

    this.heapify(this.arr, 0);

    return res;
  }

  heapInsert(arr, num) {
    arr.push(num);
    let index = arr.length - 1;

    while (arr[index] < arr[parseInt((index - 1) / 2)]) {
      swap(arr, index, parseInt((index - 1) / 2));
      index = parseInt((index - 1) / 2);
    }
  }

  heapify(arr, index) {
    let left = index * 2 + 1;

    while (left < arr.length) {
      let minIndex =
        left + 1 < arr.length && arr[left + 1] < arr[left] ? left + 1 : left;
      // 子中最小值
      if (arr[minIndex] < arr[index]) {
        swap(arr, minIndex, index);
        index = minIndex;
        left = index * 2 + 1;
      }
    }
  }

  printArr() {
    console.log(this.arr);
  }
}

function test() {
  let heap = new Heap();
  heap.printArr();
  heap.add(4);
  heap.printArr();
  heap.add(5);
  heap.printArr();
  heap.add(3);
  heap.printArr();
  heap.add(2);
  heap.printArr();

  let a = heap.poll();
  console.log(`------a------`);
  console.log(a);
  heap.printArr();
}

test();
