// 获取子数组最小值和累计和乘积

const { genRandomArr } = require("../utils");

function getMinSum(arr) {
  if (arr === null || arr.length < 1) {
    return;
  }

  let stack = [];
  let sums = [];
  sums[0] = arr[0];

  // 经典求法是求index，现在要求累加和，怎么能很快求出仍以位置间的累加和呢
  for (let i = 1; i < arr.length; i++) {
    sums[i] = sums[i - 1] + arr[i];
  }

  let maxVal = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
      let popIndex = stack.pop();
      let leftMoreIndex = stack.length > 0 ? stack[stack.length - 1] : -1;
      let popSum = (sums[popIndex - 1] || 0) - (sums[leftMoreIndex] || 0);
      maxVal = Math.max(maxVal, popSum * arr[popIndex]);
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    let popIndex = stack.pop();
    leftMoreIndex = stack.length > 0 ? stack[stack.length - 1] : -1;
    let popSum = sums[popIndex] - (sums[leftMoreIndex] || 0);
    maxVal = Math.max(maxVal, popSum * arr[popIndex]);
  }

  return maxVal;
}

function getMinSum2(arr) {
  if (arr === null || arr.length < 1) {
    return null;
  }

  let stack = [];
  let sums = [];
  sums[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sums[i] = sums[i - 1] + arr[i];
  }

  let maxVal = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1][0]]) {
      let popList = stack.pop();
      let leftLessList = stack.length > 0 ? stack[stack.length - 1] : [-1];
      let leftLessIndex = leftLessList[leftLessList.length - 1];

      let popSum = (sums[i - 1] || 0) - (sums[leftLessIndex] || 0);

      maxVal = Math.max(maxVal, arr[popList[0]] * popSum);
    }
    if (stack.length > 0 && arr[i] === arr[stack[stack.length - 1][0]]) {
      stack[stack.length - 1].push(i);
    } else {
      let list = [i];
      stack.push(list);
    }
  }

  while (stack.length > 0) {
    let popList = stack.pop();
    let leftLessList = stack.length > 0 ? stack[stack.length - 1] : [-1];
    let leftLessIndex = leftLessList[leftLessList.length - 1];

    let popSum = sums[arr.length - 1] - (sums[leftLessIndex] || 0); //最后没弹出的就是知道结尾都没有比他大的数

    maxVal = Math.max(maxVal, popSum * arr[popList[0]]);
  }

  return maxVal;
}

function max2(arr) {
  if (arr == null || arr.length < 1) {
    return;
  }
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];

    let j = i + 1;
    for (; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        sum += arr[j];
      } else {
        break;
      }
    }
    j = i - 1;

    for (; j >= 0; j--) {
      if (arr[j] >= arr[i]) {
        sum += arr[j];
      } else {
        break;
      }
    }
    max = Math.max(max, sum * arr[i]);
  }
  return max;
}

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = genRandomArr(maxSize, maxValue);

    // let arr = [4, 8, 10];
    //
    let res1 = getMinSum2(arr);
    let res2 = max2(arr);

    if (res1 != res2) {
      succeed = false;
      console.log(`------arr,res1,res2------`);
      console.log(arr, res1, res2);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
