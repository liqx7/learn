function generateRandomArray(maxSize, maxValue) {
  let arr = new Array(parseInt((maxSize + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = generateRandomNum(maxValue);
  }

  return arr;
}

function generateRandomNum(maxValue) {
  return (
    parseInt((maxValue + 1) * Math.random()) -
    parseInt(maxValue * Math.random())
  );
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

function isEqualArray(arr1, arr2) {
  if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
    return false;
  }
  if (arr1 == null && arr2 === null) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  let res = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) {
      res = false;
    }
  }

  return res;
}

function swap(arr, i, j) {
  if (i === j) {
    return;
  }
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

module.exports = {
  generateRandomNum,
  generateRandomArray,
  copyArray,
  isEqualArray,
  swap,
};
