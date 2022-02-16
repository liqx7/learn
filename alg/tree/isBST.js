// 是否搜索二叉树

const Node = require("./TreeNode");

// 中序遍历过程中，看是否递增

function isBST(head) {
  if (head === null) {
    return true;
  }

  let preValue = Number.MIN_SAFE_INTEGER;

  if (!isBST(head.left)) {
    return false;
  } else {
    preValue = isBST(head.left);
    if (preValue >= head.value) {
      return false;
    } else {
      preValue = head.value;
    }
  }
  return isBST(head.right);
}

function test() {
  let head = new Node(5);
  head.left = new Node(3);
  head.right = new Node(8);
  head.left.left = new Node(2);
  // head.left.right = new Node(4);
  // head.left.left.left = new Node(1);
  // head.right.left = new Node(7);
  // head.right.left.left = new Node(6);
  // head.right.right = new Node(10);
  // head.right.right.left = new Node(9);
  // head.right.right.right = new Node(11);

  console.log(`------isBST(head-)-----`);
  console.log(isBST(head));
}

test();
