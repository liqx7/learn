const { swap, generateRandomArray } = require("../../utils");

// 构造堆
function heapInsert(arr, index) {
  // 不是头节点，且比父大 index=0 0-1 /2 parseInt为0
  while (index > 0 && arr[index] > arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1); // 交换比父大的数
    // index指针跟随
    index = (index - 1) >> 1;
  }
}

function isHeap(arr) {
  if (arr == null || arr.length < 2) {
    return true;
  }
  let res = true;
  for (let i = 0; i < arr.length; i++) {
    // 子元素存在且比子元素小
    if (
      ((i << 1) + 1 < arr.length && arr[i] < arr[(i << 1) + 1]) ||
      ((i << 1) + 2 < arr.length && arr[i] < arr[(i << 1) + 2])
    ) {
      return false;
    }
  }
  return res;
}

function heapify(arr, index, heapSize) {
  left = index * 2 + 1; // 有有孩子一定有做孩子
  while (left < heapSize) {
    //  有右孩子且右孩子大，才选有孩子
    let maxIndex =
      left + 1 < size && arr[left + 1] > arr[left] ? left + 1 : left;
    if (arr[maxIndex] > arr[index]) {
      swap(arr, index, maxIndex);
      index = maxIndex; // 交换后指针后移
      left = index * 2 + 1; // 更新左孩子
    } else {
      break;
    }
  }
}

function main() {
  let testTimes = 50;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = generateRandomArray(maxSize, maxValue);
    let res = new Array(arr.length);

    for (let heapSize = 0; heapSize < arr.length; heapSize++) {
      res[heapSize] = arr[heapSize];
      heapInsert(res, heapSize);
    }

    // test heapify
    let heapSize = res.length - 1;
    let pop = res[0];
    res[0] = res[heapSize--];
    heapify(arr, 0, heapSize);

    if (!isHeap(res)) {
      succeed = false;
      console.log(`------arr,res------`);
      console.log(arr, res);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
