// 基数排序

const { copyArray, isEqualArray } = require("../../utils");

function radixSort1(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  let digit = maxBits(arr);

  // 每次出入桶是一次循环，直到最大位数
  radixSort(arr, 0, arr.length - 1, digit);
}

function maxBits(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }

  let res = 0;
  while (max != 0) {
    res++;
    max = parseInt(max / 10);
  }

  return res;
}

function radixSort(arr, begin, end, digit) {
  const radix = 10;

  let help = new Array(end - begin + 1);

  // 进桶触痛是一次操作，进完最大位数就结束了
  for (let d = 1; d <= digit; d++) {
    let count = new Array(radix); // 词频统计数组
    for (let i = 0; i < count.length; i++) {
      count[i] = 0;
    }
    for (let i = begin; i <= end; i++) {
      let a = getDigit(arr[i], d);
      count[a]++; // 最开始没有值为undifined
    }

    // count 累加
    for (let i = 1; i < radix; i++) {
      count[i] = count[i] + count[i - 1];
    }

    for (let i = end; i >= begin; i--) {
      let n = getDigit(arr[i], d);
      help[count[n] - 1] = arr[i];
      count[n]--;
    }

    for (let i = begin; i <= end; i++) {
      arr[i] = help[i - begin];
    }
  }
}

function getDigit(num, d) {
  return parseInt(num / Math.pow(10, d - 1)) % 10;
}

function comparator(arr) {
  arr.sort((a, b) => a - b);
}

function generateRandomArray(maxSize, maxValue) {
  let arr = new Array(parseInt((maxSize + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt((maxValue + 1) * Math.random());
  }
  return arr;
}

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);

    radixSort1(arr1);
    comparator(arr2);

    if (!isEqualArray(arr1, arr2)) {
      succeed = false;
      console.log(`------arr1,arr2------`);
      console.log(arr1, arr2);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);

  console.log(getDigit(12344, 2));
  console.log(maxBits([1, 11, 1111, 11111]));
}

main();
