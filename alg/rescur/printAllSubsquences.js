// 打印全部子序列
function printAll(str) {
  if (str === null) {
    return;
  }

  let arr = str.split("");

  // process(arr, 0);
  let res = [];
  process2(arr, 0, res);
}

// 基础过程，打印i位置后的子序列
function process(arr, i) {
  // 来到终止位置, 就,调整完数组了，进行打印
  if (i === arr.length) {
    console.log(arr.filter((v) => v !== null).join(""));
    return;
  }

  // i要,继续走下一步
  process(arr, i + 1);

  // i不要，就把i位置置为空,走下一步，再还原
  let temp = arr[i];
  arr[i] = null;
  process(arr, i + 1);
  // 走完了
  arr[i] = temp;
}

function process2(arr, i, res) {
  // 吧结果待下去
  if (i === arr.length) {
    console.log(res.join(""));
    return;
  }

  // 要i
  resKeep = [...res];
  resKeep.push(arr[i]);
  process2(arr, i + 1, resKeep);

  // 不要i
  resNoInclude = [...res];
  process2(arr, i + 1, resNoInclude);
}

function test() {
  let a = "abc";
  printAll(a);
}

test();
