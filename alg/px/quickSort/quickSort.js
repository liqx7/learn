// 快排

const { generateRandomArray, copyArray, isEqualArray } = require("../../utils");

// 1.0
function quickSort1(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  quickSortRecurse(arr, 0, arr.length - 1);
}

// l-r范围快排
function quickSortRecurse(arr, l, r) {
  if (l >= r) {
    return;
  }

  // 进行partition,最后一个值
  let less = partition(arr, l, r - 1, arr[r]);
  swap(arr, less + 1, r);
  // 对左侧排序
  quickSortRecurse(arr, l, less);
  quickSortRecurse(arr, less + 2, r);
}

function swap(arr, i, j) {
  if (i === j) {
    return;
  }
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

function partition(arr, l, r, num) {
  if (arr === null) {
    return l - 1;
  }

  let less = l - 1;
  while (l <= r) {
    if (arr[l] <= num) {
      swap(arr, l, ++less);
    }
    l++;
  }
  return less;
}

function comparator(arr) {
  arr.sort((a, b) => a - b);
}

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);
    quickSort1(arr1);
    comparator(arr2);
    if (!isEqualArray(arr1, arr2)) {
      succeed = false;
      console.log(`------arr1,arr2------`);
      console.log(arr1, arr2);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
