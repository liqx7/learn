// 扑克牌游戏
function win1(arr) {
  if (arr == null || arr.length == 0) {
    return 0;
  }

  // 限售或后手的最大值
  return Math.max(f(arr, 0, arr.length - 1), s(arr, 0, arr.length - 1));
}

// arr, i, j;是一种状态，这个状态下的操作的结果
// 限售那排策略
function f(arr, i, j) {
  // arr i, j位置的最好策略的分数

  if (i === j) {
    // 只剩一张牌 ,就拿这张
    return arr[i];
  }

  // 拿左边
  arr[i];
  // i后移，变成了i+1到j的游戏，自己变成后手
  // 后手做了最优策略后
  return Math.max(arr[i] + s(arr, i + 1, j), arr[j] + s(arr, i, j + 1));
}

function s(arr, i, j) {
  if (i === j) {
    // 只剩一张牌 ,后手拿不到
    return 0;
  }

  // 你是后手，对方拿i位置或j位置，给你留最小的
  // return Math.min()
  // 对方拿i 你接下来的分数变成f(arr,i+1,j)
  // 对方拿j
  // 对方拿你的分数最小的
  return Math.min(f(arr, i + 1, j), f(arr, i, j + 1));
}
