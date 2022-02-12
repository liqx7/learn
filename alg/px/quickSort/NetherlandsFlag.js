// 荷兰国旗，三个区域
function NetherlandsFlag1(arr, num) {
  if (arr == null || arr.length === 0) {
    return -1;
  }

  let less = -1; // 小于区域的边界
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= num) {
      // 有一个小于的，把它放在边界待吞噬
      swap(arr, i, ++less);
    }
  }
  return less;
}

function NetherlandsFlag2(arr, num) {
  if (arr == null) {
    return null;
  }

  let less = -1; // 小于区域的边界
  let more = arr.length;
  let i = 0;
  while (i < more) {
    if (arr[i] < num) {
      // 有一个小于的，把它放在边界待吞噬
      swap(arr, i, ++less);
      //小于交换之后i++
      i++;
    } else if (arr[i] > num) {
      swap(arr, i, --more);
      //大于交换后i不++
    } else {
      //等于的话i++
      i++;
    }
  }
  return [less, more];
}

function swap(arr, i, j) {
  if (arr == null) {
    return;
  }
  // 跟自己交换，内存相同，清零了
  // arr[i] = arr[i] ^ arr[j];
  // arr[j] = arr[i] ^ arr[j];
  // arr[i] = arr[i] ^ arr[j];
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function isTrue(arr, num, less) {
  let res = true;
  if (arr == null) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if ((i <= less && arr[i] > num) || (i > less && arr[i] <= num)) {
      res = false;
    }
  }
  return res;
}
function isTrue2(arr, num, [less, more]) {
  let res = true;
  if (arr == null) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    // 大坑more>i>less这个写法变成0>0--false false>-1--true
    if (
      (i <= less && arr[i] > num) ||
      (more > i && i > less && arr[i] != num) ||
      (i >= more && arr[i] < num)
    ) {
      res = false;
    }
  }
  return res;
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
  return (
    parseInt((maxValue + 1) * Math.random()) -
    parseInt(maxValue * Math.random())
  );
}

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = generateRandomArray(maxSize, maxValue);
    let num = generateRandomNum(maxValue);

    // let less = NetherlandsFlag1(arr, num);

    // if (!isTrue(arr, num, less)) {
    //   succeed = false;
    //   console.log(`------arr------`);
    //   console.log(arr, num, less);
    // }

    let [less, more] = NetherlandsFlag2(arr, num);
    if (!isTrue2(arr, num, [less, more])) {
      succeed = false;
      console.log(`------arr------`);
      console.log(arr, num, less, more);
    }
  }

  console.log(`------succeed?'Nice!':'No'------`);
  console.log(succeed ? "Nice!" : "No");

  // let a = [1, 3, 4];
  // // swap(a, 1, 2);
  // NetherlandsFlag1(a, 2);
  // console.log(`------------`);
  // console.log(a);
}

main();
