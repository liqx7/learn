// 获取子数组最小值和累计和乘积

const { genRandomArr } = require("../utils");

function getMinSum(arr) {
  if (arr === null || arr.length < 1) {
    return null;
  }

  let stack = [];

  let maxVal = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    let curList = [{ index: i, leftSum: 0, rightSum: 0 }];
    while (stack.length > 0) {
      let topList = stack.pop();

      if (arr[curList[0].index] > arr[topList[0].index]) {
        stack.push(topList);
        // stack.push(curList);
        // curList[0].leftSum += topList.length * arr[topList[0].index];
        topList[0].rightSum += arr[curList[0].index];
        break;
      }
      //
      else if ((arr[curList[0].index] = arr[topList[0].index])) {
        let newList = topList.concat(curList);
        // stack.push(newList);
        curList = newList;
        break;
      }
      // 弹出操作
      else {
        maxVal = Math.max(maxVal, process(arr, topList));
        // 弹出比他大的
        curList[0].leftSum += topList.length * arr[topList[0].index];

        //
      }
    }

    stack.push(curList);
  }

  while (stack.length > 0) {
    let curList = stack.pop();
    maxVal = Math.max(maxVal, process(arr, curList));
    return maxVal;
  }

  return maxVal;
}

function process(arr, topList) {
  return (
    arr[topList[0].index] *
    (topList[0].leftSum +
      arr[topList[0].index] * topList.length +
      topList[0].rightSum)
  );
}

function max2(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    let minValue = arr[i];
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (arr[j] < minValue) {
        minValue = arr[j];
      }
    }
    max = Math.max(max, sum * minValue);
  }
  return max;
}

function main() {
  let testTimes = 50;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = genRandomArr(maxSize, maxValue);
    let res1 = getMinSum(arr);
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
