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

function genRandomArr(maxSize, maxValue) {
  let arr = new Array(parseInt((maxSize + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = genRandomNum(maxValue);
  }

  return arr;
}

function genRandomNum(maxValue) {
  return parseInt((maxValue + 1) * Math.random());
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
  // if (i === j) {
  //   return;
  // }
  // arr[i] = arr[i] ^ arr[j];
  // arr[j] = arr[i] ^ arr[j];
  // arr[i] = arr[i] ^ arr[j];
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

class Heap {
  constructor(comparator) {
    this.arr = [];
    this.comparator = comparator;
  }

  cpr(i, j) {
    return this.comparator(this.arr[i], this.arr[j]);
  }

  size() {
    return this.arr.length;
  }

  peek() {
    if (this.arr.length < 1) {
      return null;
    }
    return this.arr[0];
  }

  add(o) {
    this.arr.push(o);
    let index = this.arr.length - 1;
    let pIndex = parseInt((index - 1) / 2);

    while (index !== pIndex) {
      if (this.cpr(pIndex, index)) {
        swap(this.arr, pIndex, index);
        index = pIndex;
        pIndex = parseInt((index - 1) / 2);
      } else {
        break;
      }
    }
  }

  poll() {
    if (this.arr.length < 1) {
      return null;
    }
    if (this.arr.length === 1) {
      return this.arr.pop();
    }

    let o = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.heapify(0);

    return o;
  }

  heapify(index) {
    let leftIndex = index * 2 + 1;
    let rightIndex = leftIndex + 1;
    let prevIndex = index;

    while (leftIndex < this.arr.length) {
      if (rightIndex < this.arr.length && this.cpr(leftIndex, rightIndex)) {
        prevIndex = rightIndex;
      } else {
        prevIndex = leftIndex;
      }

      if (this.cpr(index, prevIndex)) {
        swap(this.arr, index, prevIndex);
        index = prevIndex;
        leftIndex = index * 2 + 1;
        rightIndex = leftIndex + 1;
      } else {
        break;
      }
    }
  }
}

function genRandomStr(maxSize) {
  //  String.fromCharCode((parseInt(Math.random()*26)+'a'.charCodeAt()))
  let arr = [];
  let i = 0;
  while (i < maxSize) {
    arr[i] = String.fromCharCode(
      parseInt(Math.random() * 26) + "a".charCodeAt()
    );
    i++;
  }
  return arr.join("");
}

module.exports = {
  generateRandomNum,
  generateRandomArray,
  copyArray,
  isEqualArray,
  swap,
  genRandomArr,
  genRandomNum,
  Heap,
  genRandomStr,
};
