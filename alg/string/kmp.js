const { genRandomStr } = require("../utils");

function KMP(str1, str2) {
  if (
    str1 === null ||
    str2 === null ||
    str2.length < 1 ||
    str1.length < str2.length
  ) {
    return -1;
  }

  let i1 = 0;
  let i2 = 0;
  let next = getNextArr(str2);

  while (i1 < str1.length && i2 < str1.length) {
    if (str1[i1] === str2[i2]) {
      i1++;
      i2++;
    } else if (next[i2] === -1) {
      i1++;
    } else {
      i2 = next[i2];
    }
  }

  return i2 === str2.length ? i1 - i2 : -1;
}

function getNextArr(str) {
  if (str === null || str.length === 1) {
    return [-1];
  }

  let next = new Array(str.length);

  next[0] = -1;
  next[1] = 0;

  let i = 2;
  let cn = 0; //上一个cn

  while (i < str.length) {
    if (str[i - 1] === str[cn]) {
      next[i++] = ++cn;
    } else if (cn > 0) {
      cn = next[cn];
    } else {
      next[i++] = 0;
    }
  }
  return next;
}

function comparator(str1, str2) {
  for (let i = 0; i <= str1.length - str2.length; i++) {
    let j = 0;
    for (; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        break;
      }
    }
    if (j === str2.length) {
      return i;
    }
  }
  return -1;
}

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let str1 = genRandomStr(maxSize * 3);
    let str2 = genRandomStr(maxSize);

    let res1 = KMP(str1, str2);
    let res2 = comparator(str1, str2);
    if (res1 !== res2) {
      succeed === false;
      console.log(`------str1,str2,res1,res2------`);
      console.log(str1, str2, res1, res2);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
