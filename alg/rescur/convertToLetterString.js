// 只有一个数字的组合转化成几种组合

function convert(str) {
  if (str === null || str.length === 0) {
    return;
  }
  let arr = str.split("");

  let num = process(arr, 0);
  return num;
}

// 从左到右
function process(arr, i) {
  if (i === arr.length) {
    return 1;
  }

  // 取一个的个数
  let num1 = process(arr, i + 1);
  let num2 = 0;
  if (Number(arr[i]) < 3 && i < arr.length - 1) {
    num2 = process(arr, i + 2);
  }
  return num1 + num2;
}

function charFromNum(num) {
  if (num < 1 || num > 26) {
    return;
  }
  return String.fromCharCode(num - 1 + "a".charCodeAt());
}

function process2(chs, i) {
  if (i == chs.length) {
    return 1;
  }
  if (chs[i] == "0") {
    return 0;
  }
  if (chs[i] == "1") {
    let res = process(chs, i + 1);
    if (i + 1 < chs.length) {
      res += process(chs, i + 2);
    }
    return res;
  }
  if (chs[i] == "2") {
    let res = process(chs, i + 1);
    if (i + 1 < chs.length && chs[i + 1] >= "0" && chs[i + 1] <= "6") {
      res += process(chs, i + 2);
    }
    return res;
  }
  return process(chs, i + 1);
}

function test() {
  let res = convert("111");
  console.log(`------res------`);
  console.log(res);
}

test();
