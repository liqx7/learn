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
  let isBalance = false;
  let height;

  let res1 = process(head.left);
  let res2 = process(head.right);

  re;
}
