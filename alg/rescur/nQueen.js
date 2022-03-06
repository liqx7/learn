// n皇后
<<<<<<< HEAD

function nQ(n) {
  if (n === null || n < 1) {
    return;
  }

  let record = [];
  return process(n, 0, record);
}

// n行，第i行开始所有的数量，需要依赖前面的，把全局的传进来
=======
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
>>>>>>> 0983d14ea7622e07834205ebd49587728f13c780
function process(n, i, record) {
  if (i === n) {
    return 1;
  }

  let res = 0;
  for (let j = 0; j < n; j++) {
    if (isValid(record, i, j)) {
      record[i] = j;
      res += process(n, i + 1, record);
    }
  }
  return res;
}

function isValid(record, i, j) {
  for (let k = 0; k < i; k++) {
    if (record[k] === j || Math.abs(i - k) === Math.abs(record[k] - j)) {
      return false;
    }
  }
  return true;
}

function test() {
  console.log(nQ(8));
}

test();
