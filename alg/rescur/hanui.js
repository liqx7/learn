// 汉诺塔
function hanoi(n) {
  if (n > 0) {
    p(n, n, "左", "右", "中");
  }
}
function p(n, down, from, to, other) {
  // 剩余几层，底部那块的编号
  if (n == 1) {
    console.log(`第${down}个盘子从${from}柱移动到${to}柱子`);
  } else {
    p(n - 1, down - 1, from, other, to);
    p(1, down, from, to, other);
    p(n - 1, down - 1, other, to, from);
  }
}

function test() {
  hanoi(3);
}

test();
