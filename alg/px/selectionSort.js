function selectionSort(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }
  for (let i = 0; i < arr.length; i += 1) {
    let minIndex = i;
    for (let j = i; j < arr.length; j += 1) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }

    // 交换i位置与i往后的最小值
    swap(arr, i, minIndex);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// for test
function comparator(arr) {
  arr.sort((a, b) => a - b);
}

function generateRandomArray(maxSize, maxValue) {
  const arr = new Array(parseInt((maxSize + 1) * Math.random()));
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
  if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
    return false;
  }
  if (arr1 == null && arr2 === null) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
}

function test() {
  let testTime = 500;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;
  for (let i = 0; i < testTime; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);
    selectionSort(arr1);
    comparator(arr2);
    if (!isEqual(arr1, arr2)) {
      succeed = false;
      console.log(arr1);
      console.log(arr2);
      break;
    }
  }
  console.log(succeed ? "Nice!" : "Fucking fucked!");

  let arr = generateRandomArray(maxSize, maxValue);
  console.log(arr);
  selectionSort(arr);
  console.log(arr);
}

test();
