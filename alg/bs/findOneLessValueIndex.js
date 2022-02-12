function findOneLess(arr) {
  if (arr === null || arr.length === 0) {
    return -1;
  }
  if (arr.length === 1 || arr[0] < arr[1]) {
    return 0;
  }
  if (arr[arr.length - 1] < arr[arr.length - 2]) {
    return arr.length - 1;
  }
  let L = 1;
  let R = arr.length - 2;
  // index = -1;
  // left is?
  let mid = 0;

  while (L < R) {
    // 两边都是向下的趋势，中间必然有
    mid = L + ((R - L) >> 1);
    if (arr[mid] > arr[mid + 1]) {
      //  在右边有下降趋势
      L = mid + 1;
    } else if (arr[mid] > arr[mid - 1]) {
      R = mid - 1;
    } else {
      return mid;
    }
  }
  // 最后变成L=R
  return L;
}

function comparator(arr) {
  if (arr == null || arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return [0];
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      arr[i] < arr[i + 1] && res.push(i);
    } else if (i === arr.length - 1) {
      arr[i] < arr[i - 1] && res.push(i);
    } else {
      arr[i] < arr[i - 1] && arr[i] < arr[i + 1] && res.push(i);
    }
  }
  return res;
}

function isOneLessValue(index, arr) {
  // return res.indexOf(index) > -1;
  let res = false;
  if (index === -1) {
    arr.length === 0 ? (res = true) : null;
  } else {
    arr.indexOf(index) > -1 ? (res = true) : null;
  }
  return res;
}

function generateRandomArray(maxSize, maxValue) {
  let arr = new Array(parseInt((maxSize + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      arr[i] = generateRandomNum(maxValue);
    } else {
      let temp = generateRandomNum(maxValue);
      // 每个数要跟前一个数不相同
      while (temp == arr[i - 1]) {
        // 相同继续生成
        temp = generateRandomNum(maxValue);
      }
      arr[i] = temp;
    }
  }
  return arr;
}

function generateRandomNum(maxValue) {
  let a =
    parseInt((maxValue + 1) * Math.random()) -
    parseInt(maxValue * Math.random());
  return a;
}

function main() {
  let testTimes = 500000;
  let maxSize = 100;
  let maxValue = 100;

  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = generateRandomArray(maxSize, maxValue);
    let res1 = findOneLess(arr);
    let resArr = comparator(arr);
    if (!isOneLessValue(res1, resArr)) {
      succeed = false;
      console.log(`-----------`);
      console.log(arr, res1, resArr);
    }
  }

  console.log(`------succeed?'Nice!':'No!!!!!'------`);
  console.log(succeed ? "Nice!" : "No!!!!!");
}

main();
