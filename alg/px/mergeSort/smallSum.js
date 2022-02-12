// 小何问题
function littleSum(arr) {
  if (arr == null || arr.length === 0) {
    return 0;
  }

  return mergeLittleSumArray(arr, 0, arr.length - 1);
}

function mergeLittleSumArray(arr, l, r) {
  if (l == r) {
    return 0;
  }

  let mid = l + ((r - l) >> 1);
  return (
    mergeLittleSumArray(arr, l, mid) +
    mergeLittleSumArray(arr, mid + 1, r) +
    merge(arr, l, mid, r)
  );
  // 左右两侧以及计算了，只需要计算合并过程中，左侧受右侧新增的数影响要多加几个
}

function merge(arr, l, m, r) {
  let help = new Array(r - l + 1);
  let i = 0;
  let p1 = l;
  let p2 = m + 1;
  let res = 0;

  // merge两边的时候，因为两边已经进行排序，右边的所有数都是在左边数后面，有序可以直接判断一个p2>p1的时候只需要计算这个p2后的个数就是右边所有p1大的数
  while (p1 <= m && p2 <= r) {
    // 处理左边某个数arr[p1]的时候，右边有什么就加几次，比它小的话就一直放到help中直到比他大的数
    if (arr[p1] < arr[p2]) {
      res += (r - p2 + 1) * arr[p1];
    }
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
    // 相等的时候先走右子树，因为邮编的不算了，只有严格小于才能加入小何
  }
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }

  for (let i = 0; i < help.length; i++) {
    arr[l + i] = help[i];
  }

  return res;
}

// console.log(merge([1, 3, 4, 2, 5], 0, 2, 4));

function comparator(arr) {
  if (arr == null || arr.length < 2) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        res += arr[i];
      }
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

function copyArray(arr) {
  if (arr === null) {
    return null;
  }
  let res = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i];
  }
  return res;
}

function main() {
  let testTimes = 1000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;
  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);
    let res1 = littleSum(arr1);
    let res2 = comparator(arr2);
    if (res1 !== res2) {
      succeed = false;
      console.log(`------arr2,res1,res2------`);
      console.log(arr2, arr1, res1, res2);
    }
  }

  console.log(`------succeed?'Nice!!!!':'No'------`);
  console.log(succeed ? "Nice!!!!" : "No");
}

main();
