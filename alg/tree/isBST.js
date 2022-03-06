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

function isBSTRecur(head) {
  if (head === null) {
    return true;
  }

  let { isBST, min, max } = process(head);
  return isBST;
}

function process(head) {
  if (head === null) {
    return { isBST: true, min: null, max: null };
  }
  let isBST = true;
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;

  let res1 = process(head.left);
  let res2 = process(head.right);

  if (res1.isBST === false || res2.isBST === false) {
    isBST = false;
  }

  if (
    (res1.max && res1.max >= head.value) ||
    (res2.min && res1.min <= head.value)
  ) {
    isBST = false;
  }

  return {
    isBST,
    min: res1.min,
    max: res2.max,
  };
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
