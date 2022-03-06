// 是否平衡二叉树，递归套路

function isBalanceTree(head) {
  if (head == null) {
    return true;
  }

  let res = process(head);

  return res.isBalance;
}

function process(head) {
  if (head === null) {
    return {
      isBalance: true,
      height: 0,
    };
  }
  let isBalance = true;
  let height = 0;

  let res1 = process(head.left);
  let res2 = process(head.right);

  if (res1.isBalance === false || res2.isBalance === false) {
    isBalance = fasle;
  }
  if (Math.abs(res1.height - res2.height) > 1) {
    isBalance = fasle;
  }
  height = Math.max(res1.height + res2.height);

  return { isBalance, height };
}
