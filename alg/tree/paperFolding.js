// 折叠纸张问题

function paperFolding(N) {
  // 折叠n次就有n层的树

  printProcess(1, N, "凹");
}

function printProcess(i, N, down) {
  if (i > N) {
    return;
  }

  printProcess(i + 1, N, "凹"); //左边是凹
  console.log(down, "=======");
  printProcess(i + 1, N, "凸");
}

function test() {
  // paperFolding(1);
  paperFolding(2);
  // paperFolding(3);
}

test();
