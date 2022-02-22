// 深度展开数组

function expandArr(arr) {
  while (arr.some((v) => Array.isArray(v))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function test() {
  let arr = [1, 2, 3, [4, 5, [6, 7], 8], 9, [10]];
  let res = expandArr(arr);
  console.log(`------arr------`);
  console.log(res);
}

test();
