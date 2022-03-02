// n皇后
function num(n) {
  if (n < 1) {
    return 0;
  }
  let record = new Array(n);
  return process(n, 0, record);
  console.log(`------record------`);
  console.log(record);
}

// n棋盘，前面都填好，第i行往下总共有多少 的数量
function process(n, i, record) {
  if (i === n) {
    return 1;
  }

  let res = 0;
  for (let j = 0; j < n; j++) {
    if (isValid(record, i, j)) {
      // 没填过
      // 宽衣填
      record[i] = j;
      res += process(n, i + 1, record);
    }
  }

  return res;
}

function isValid(record, i, j) {
  for (let k = 0; k < i; k++) {
    if (record[k] === j || Math.abs(record[k] - j) === Math.abs(i - k)) {
      return false;
    }
  }
  return true;
}

function test() {
  console.log(num(3));
}

test();
