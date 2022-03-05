const { genRandomArr } = require("../utils");

// 单调栈

function getNearlySmallNum(arr) {
  if (arr == null || arr.length < 1) {
    return null;
  }

  let stack = [];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
      // 处理弹出的数
      let popIndex = stack.pop();
      res[popIndex] = [];
      res[popIndex][0] = stack.length === 0 ? -1 : stack[stack.length - 1];
      res[popIndex][1] = i;
    }
    // 栈里有比他大的小的数都弹出了，自己压回去
    stack.push(i);
  }

  while (stack.length > 0) {
    let popIndex = stack.pop();
    res[popIndex] = [];
    let leftLessIndex = stack.length === 0 ? -1 : stack[stack.length - 1];
    res[popIndex][0] = leftLessIndex;
    res[popIndex][1] = -1;
  }

  return res;
}

function getNearlyLess(arr) {
  if (arr === null || arr.length < 1) {
    return null;
  }

  let stack = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1][0]] > arr[i]) {
      let popList = stack.pop();

      let leftLessList = stack.length === 0 ? [-1] : stack[stack.length - 1];

      for (let popIndex of popList) {
        res[popIndex] = [];
        res[popIndex][0] = leftLessList[leftLessList.length - 1];
        res[popIndex][1] = i;
      }
    }

    if (stack.length > 0 && arr[stack[stack.length - 1][0]] === arr[i]) {
      stack[stack.length - 1].push(i);
    } else {
      let list = [];
      list.push(i);
      stack.push(list);
    }
  }

  while (stack.length > 0) {
    let popList = stack.pop();
    let leftLessList = stack.length > 0 ? stack[stack.length - 1] : [-1];

    for (let popIndex of popList) {
      res[popIndex] = [];
      res[popIndex][0] = leftLessList[leftLessList.length - 1];
      res[popIndex][1] = -1;
    }
  }

  return res;
}

function comparator(arr) {
  if (arr == null || arr.length < 1) {
    return null;
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = [];
    let l = i - 1;
    let r = i + 1;
    for (; l >= 0; l--) {
      if (arr[l] < arr[i]) {
        res[i][0] = l;
        break;
      }
    }
    if (l === -1) {
      res[i][0] = -1;
    }

    for (; r < arr.length; r++) {
      if (arr[r] < arr[i]) {
        res[i][1] = r;
        break;
      }
    }
    if (r === arr.length) {
      res[i][1] = -1;
    }
  }

  return res;
}

function main() {
  let testTimes = 50;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    // let arr = genRandomArr(maxSize, maxValue);
    let arr = [6, 2, 2, 1, 3];
    let res1 = getNearlyLess(arr);
    let res2 = comparator(arr);

    if ((res1 == null) | (res2 === null)) {
      break;
    }

    for (let j = 0; j < res1.length; j++) {
      if (res1[j][0] !== res2[j][0] || res1[j][1] !== res2[j][1]) {
        succeed = false;
        console.log(`------arr,j,res1[j]------`);
        console.log(arr, j, res1[j], res2[j]);
        break;
      }
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
