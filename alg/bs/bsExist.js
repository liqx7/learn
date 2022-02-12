const insertionSort = require("../px/insertionSort");

function bsExist(arr, num) {
  if (arr == null || arr.length == 0) {
    return false;
  }
  let L = 0;
  let R = arr.length - 1;
  let mid = 0;
  while (L < R) {
    mid = L + ((R - L) >> 1);
    if (arr[mid] == num) {
      return true;
    } else if (arr[mid] > num) {
      R = mid - 1;
    } else if (arr[mid] < num) {
      L = mid + 1;
    }
  }
  // 退出条件 L===R
  return arr[L] === num;
}

function comparator(arr, num) {
  for (let v of arr) {
    // console.log(`------v------`);
    // console.log(v);
    if (v === num) {
      return true;
    }
  }
  return false;
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
    let res1 = bsExist(arr, num);
    let res2 = comparator(arr, num);
    if (!isEqual(res1, res2)) {
      console.log(`------arr,num,res1,res2------`);
      console.log(arr, num, res1, res2);
      succeed = false;
    }
  }

  // console.log(`------------`);
  console.log(succeed ? "Nice!" : "No!!!!!");

  // let arr = generateRandomArray(maxSize, maxValue);
  // // console.log(`------arr------`);
  // // console.log(arr);
  // let num = generateRandomNum(maxValue);
  // // console.log(`------num------`);
  // // console.log(num);
  // let res1 = bsExist(arr, num);
  // // console.log(`------res1------`);
  // // console.log(res1);
  // let res2 = comparator(arr, num);
  // // console.log(`------res2------`);
  // // console.log(res2);
}

// main();
