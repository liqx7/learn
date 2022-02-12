// 逆序对问题

function revertCouple(arr) {
  if (arr == null || arr.length < 2) {
    return 0;
  }

  return mergeProcess(arr, 0, arr.length - 1);
}

function mergeProcess(arr, l, r) {
  if (l === r) {
    return 0;
  }

  let mid = l + ((r - l) >> 1);
  return (
    mergeProcess(arr, l, mid) +
    mergeProcess(arr, mid + 1, r) +
    merge(arr, l, mid, r)
  );
}

function merge(arr, l, m, r) {
  if (arr === null || arr.length < 2) {
    return 0;
  }
  let res = 0;
  let p1 = l;
  let p2 = m + 1;
  let help = new Array(r - l + 1);
  let i = 0;

  while (p1 <= m && p2 <= r) {
    res += arr[p1] > arr[p2] ? r - p2 + 1 : 0;
    //  merge成大到小
    help[i++] = arr[p1] > arr[p2] ? arr[p1++] : arr[p2++]; //p1数已经利用完了
  }
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }

  //  help已经有序，大到小
  for (let i = 0; i < help.length; i++) {
    arr[l + i] = help[i];
  }

  return res;
}

function comparator(arr) {
  if (arr == null || arr.length < 2) {
    return 0;
  }

  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        res++;
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
  if (arr == null) {
    return null;
  }

  let res = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i];
  }
  return res;
}

function main() {
  let testTimes = 50000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    // let arr1 = [0, -3, -8];
    let arr2 = copyArray(arr1);
    let res1 = revertCouple(arr1);
    let res2 = comparator(arr2);
    if (res1 !== res2) {
      succeed = false;
      console.log(`------arr2,arr1,res2,res1------`);
      console.log(arr2, arr1, res2, res1);
    }
  }

  console.log(`------succeed?'Nice!!!!':'No'------`);
  console.log(succeed ? "Nice!!!!" : "No");
}

main();
