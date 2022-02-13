const {
  swap,
  generateRandomArray,
  copyArray,
  isEqualArray,
} = require("../../utils");

function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  // 首先构造大根堆 o(nlogn)
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }
  // heapify变大根堆
  for (let i = arr.length - 1; i > 0; i--) {
    // i位置往下做heapify
    heapify(arr, i, arr.length);
  }

  let heapSize = arr.length;
  while (heapSize > 1) {
    // 将第一个数换到最后一位
    swap(arr, 0, heapSize - 1);

    heapify(arr, 0, --heapSize);
  }
}

function comparator(arr) {
  arr.sort((a, b) => a - b);
}

// 构造堆
function heapInsert(arr, index) {
  // 不是头节点，且比父大 index=0 0-1 /2 parseInt为0
  while (index > 0 && arr[index] > arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1); // 交换比父大的数
    // index指针跟随
    index = (index - 1) >> 1;
  }
}

function isHeap(arr, heapSize) {
  if (arr == null || heapSize < 2) {
    return true;
  }
  let res = true;
  for (let i = 0; i <= heapSize; i++) {
    // 子元素存在且比子元素小
    if (
      ((i << 1) + 1 <= heapSize && arr[i] < arr[(i << 1) + 1]) ||
      ((i << 1) + 2 <= heapSize && arr[i] < arr[(i << 1) + 2])
    ) {
      return false;
    }
  }
  return res;
}

function heapify(arr, index, heapSize) {
  if (arr == null || heapSize < 2) {
    return;
  }

  if (heapSize < 0 || index > heapSize) {
    return;
  }

  let left = index * 2 + 1; // 有有孩子一定有做孩子
  while (left < heapSize) {
    //  有右孩子且右孩子大，才选有孩子
    let maxIndex =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    if (arr[maxIndex] > arr[index]) {
      swap(arr, index, maxIndex);
      index = maxIndex; // 交换后指针后移
      left = index * 2 + 1; // 更新左孩子
    } else {
      break;
    }
  }
}

function heapPop(arr) {
  if (arr === null || arr.length < 1) {
    return;
  }

  let pop = arr[0];
  arr[0] = arr[arr.length - 1];
  heapify(arr, 0, arr.length - 1);
  return pop;
}

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = generateRandomArray(maxSize, maxValue);

    //  test sort
    let arr1 = copyArray(arr);
    heapSort(arr);
    comparator(arr1);
    if (!isEqualArray(arr, arr1)) {
      succeed = false;
    }

    /* test heapInsert
    // 数组变大根堆
    for (let i = 0; i < arr.length; i++) {
      // arr 数组不断遍历，就等同于不断插入新数据，heapSize增加的过程
      // res[i] = arr[i];
      // 没有必要辅助数组
      heapInsert(arr, i);
    }
    if (!isHeap(arr, arr.length)) {
      succeed = false;
    }
    */

    /*  test heapify
    let heapSize = arr.length;

    heapPop(arr);

    if (!isHeap(arr, heapSize - 1)) {
      succeed = false;
 
    }
    */
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
