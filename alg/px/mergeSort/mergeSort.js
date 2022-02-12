function mergeSort(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }
  // 在l r 范围上进行归并排序
  mergeSortByRange(arr, 0, arr.length - 1);
}

function mergeSortByRange(arr, l, r) {
  if (l === r) {
    return;
  }
  let mid = l + ((r - l) >> 1);
  // 对左边排序
  mergeSortByRange(arr, l, mid);
  // 对右边排序
  mergeSortByRange(arr, mid + 1, r);
  // 合并左右两边有序数组
  merge(arr, l, mid, r);

  // T(N)=2*T(N/2)+O(N)---nlogn
}

function merge(arr, l, m, r) {
  let help = new Array(r - l + 1);
  let i = 0; // help输入的指针
  let p1 = l; //左侧的指针
  let p2 = m + 1;

  while (p1 <= m && p2 <= r) {
    // 都没越界，两个比较
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  //必然有一个越界了，如果是右侧越界，左侧继续依次输入
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }
  // 再把辅助数组考回原数组
  for (let i = 0; i < help.length; i++) {
    arr[l + i] = help[i];
  }
}
function comparator(arr) {
  arr.sort((a, b) => a - b);
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

function isEqual(arr1, arr2) {
  if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
    return false;
  } else if (arr1 === null && arr2 == null) {
    return true;
  } else {
    // 两个都不为null
    for (let k in arr1) {
      if (arr2[k] !== arr1[k]) {
        return false;
      }
    }
    return true;
  }
}

function main() {
  let testTimes = 50;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);
    mergeSort(arr1);
    comparator(arr2);
    if (!isEqual(arr1, arr2)) {
      succeed = false;
      console.log(`------arr1,arr2------`);
      console.log(arr1, arr2);
    }
  }
  console.log(`------succeed?'Nice!':'More Thinking!'------`);
  console.log(succeed ? "Nice!" : "More Thinking!");
}

main();
