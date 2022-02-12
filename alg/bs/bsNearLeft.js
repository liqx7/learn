const insertionSort = require("../px/insertionSort");

function bsNearLeft(arr, num) {
  if (arr == null || arr.length == 0) {
    return -1;
  }
  let L = 0;
  let R = arr.length - 1;
  let index = -1;
  while (L < R) {
    let mid = L + ((R - L) >> 1);
    if (arr[mid] == num) {
      // return true;
      index = mid; // index先设成mid,继续往左找
      R = mid - 1;
    } else if (arr[mid] > num) {
      R = mid - 1;
    } else if (arr[mid] < num) {
      L = mid + 1;
    }
  }
  // 退出条件 L===R
  return arr[L] === num ? L : index;
}

function comparator(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

function generateRandomArray(maxSize, maxValue) {
  let arr = new Array(parseInt((maxSize + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] =
      parseInt((maxValue + 1) * Math.random()) -
      parseInt(maxValue * Math.random());
  }
  return arr;
}

function generateRandomNum(maxValue) {
  let a =
    parseInt((maxValue + 1) * Math.random()) -
    parseInt(maxValue * Math.random());
  return a;
}

function isEqual(res1, res2) {
  return res1 === res2;
}

function main() {
  let testTimes = 500000;
  let maxSize = 100;
  let maxValue = 100;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = generateRandomArray(maxSize, maxValue);
    insertionSort(arr);
    let num = generateRandomNum(maxValue);
    let res1 = bsNearLeft(arr, num);
    let res2 = comparator(arr, num);
    if (!isEqual(res1, res2)) {
      console.log(`------arr,num,res1,res2------`);
      console.log(arr, num, res1, res2);
      succeed = false;
    }
  }

  // console.log(`------------`);
  console.log(succeed ? "Nice!" : "No!!!!!");
}

// main();
