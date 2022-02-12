function printOddTimesNum1(arr) {
  let e0 = 0;
  for (let v of arr) {
    e0 ^= v;
  }
  console.log(`------e0------`);
  console.log(e0);
  return e0;
}

function printOddTimesNum2(arr) {
  let e0 = 0;
  for (let k of arr) {
    e0 ^= k;
  }

  let rightOne = e0 & (~e0 + 1); //取最右位的1，用于区别此位置上不同的数
  let e2 = e0;
  for (let k of arr) {
    if ((k & rightOne) === 0) {
      // 此位置上的数为0的数
      e2 ^= k; //e2变成为0的数a
    }
  }
  console.log(`------[e0 ^ e2, e2]------`);
  console.log([e0 ^ e2, e2]);
  return [e0 ^ e2, e2];
}

function main() {
  let arr1 = [3, 3, 2, 3, 1, 1, 1, 3, 1, 1, 1];
  printOddTimesNum1(arr1);
  let arr2 = [4, 3, 4, 2, 2, 2, 4, 1, 1, 1, 3, 3, 1, 1, 1, 4, 2, 2];
  printOddTimesNum2(arr2);
}

main();
