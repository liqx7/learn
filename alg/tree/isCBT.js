// 是否完全二叉树

const Node = require("./TreeNode");

function isCBT(head) {
  if (head === null) {
    return true;
  }

  let leaf = false;
  let l = null;
  let r = null;

  let arr = [];
  arr.push(head);

  while (arr.length > 0) {
    head = arr.shift();
    l = head.left;
    r = head.right;

    if ((l == null && r !== null) || (leaf && (l != null || r != null))) {
      return false;
    }
    if (l != null) {
      arr.push(l);
    }
    if (r != null) {
      arr.push(r);
    }
    if (l === null || r === null) {
      leaf = true;
    }
  }
  return true;
}
