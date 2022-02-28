// 打印全部子序列

function printAll(str) {
  if (str.length < 1) {
    return;
  }
  p(str.split(""), 0);
}

function p(arr, i) {
  // 走到最后
  if (i === arr.length) {
    console.log(arr.filter((v) => v).join(""));
    return;
  }

  // 继续往下走
  // 如果包含i
  p(arr, i + 1);

  // 如果不包含i
  let temp = arr[i];
  arr[i] = null;
  p(arr, i + 1);
  arr[i] = temp;
}

function test() {
  let a = "abc";
  printAll(a);
}

test();
