const { Heap, genRandomArr } = require("../utils");

// 快速找到中位数
function madianQuick(arr) {
  if (arr.length < 1) {
    return;
  }
  let maxH = new Heap((a, b) => a < b);
  let minH = new Heap((a, b) => a > b);

  for (let i = 0; i < arr.length; i++) {
    addNumber(arr[i], maxH, minH);
  }

  let maxSize = maxH.size();
  let minSize = minH.size();

  if (maxSize + minSize === 0) {
    return null;
  }
  let maxHHead = maxH.peek();
  let minHHead = minH.peek();

  if (((maxSize + minSize) & 1) === 0) {
    return (maxHHead + minHHead) / 2;
  }
  return maxSize > minSize ? maxHHead : minHHead;
}

function addNumber(num, maxH, minH) {
  if (maxH.size() > 0 && num <= maxH.peek()) {
    maxH.add(num);
  } else {
    minH.add(num);
  }
  modifyTwoHeaapSize(maxH, minH);
}

function modifyTwoHeaapSize(maxH, minH) {
  let maxSize = maxH.size();
  let minSize = minH.size();

  if (maxSize == minSize + 2) {
    minH.add(maxH.poll());
  }
  if (minSize === maxSize + 2) {
    maxH.add(minH.poll());
  }
}

function comparator(arr) {
  if (arr.length < 1) {
    return;
  }
  arr.sort((a, b) => a - b);
  let mid = (arr.length - 1) >> 1;
  if ((arr.length & 1) === 0) {
    return (arr[mid] + arr[mid + 1]) / 2;
  } else {
    return arr[mid];
  }
}

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = genRandomArr(maxSize, maxValue);
    let arr1 = [...arr];

    let res1 = madianQuick(arr);
    let res2 = comparator(arr1);
    if (res1 !== res2) {
      succeed = false;
      console.log(`------arr,res1,res2------`);
      console.log(arr, res1, res2);
    }
  }

  // let arr = [5, 6, 1, 10, 1, 0, 2];
  // let arr1 = [...arr];

  // let res1 = madianQuick(arr);
  // let res2 = comparator(arr1);

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
