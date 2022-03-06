// 树的最大宽度

const Node = require("./TreeNode");

function getMaxWidth(head) {
  if (head == null) {
    return 0;
  }

  let levelMap = new Map();
  let curLevel = 1;
  let curNodes = 0;
  let max = 0;
  let arr = [];

  arr.push(head);
  levelMap.set(head, 1);

  while (arr.length > 0) {
    head = arr.shift();
    if (head.left != null) {
      arr.push(head.left);
      levelMap.set(head.left, levelMap.get(head) + 1);
    }
    if (head.right != null) {
      arr.push(head.right);
      levelMap.set(head.right, levelMap.get(head) + 1);
    }
    if (levelMap.get(head) === curLevel) {
      // 在当前层
      curNodes++;
    } else {
      // 到下一层了，结算
      // max = Math.max(curNodes, max);
      curNodes = 1;
      curLevel++;
    }

    max = Math.max(curNodes, max);
  }
  // max = Math.max(curNodes, max); // 最后一层
  return max;
}

// 不用哈希表的方法
function getMaxWidth1(head) {
  if (head === null) {
    return 0;
  }

  let curEnd = null;
  let nextEnd = null;
  let curWidth = 0;
  let max = 0;

  let arr = [];

  arr.push(head);
  curEnd = head;

  while (arr.length > 0) {
    head = arr.shift();
    if (head.left) {
      arr.push(head.left);
      nextEnd = head.left;
    }
    if (head.right) {
      arr.push(head.right);
      nextEnd = head.right;
    }
    if (head === curEnd) {
      // 弹出去的是本层最后一个节点了，下一个循环是下一层
      curEnd = nextEnd;
      curWidth = 0;
    }
    curWidth++;

    max = Math.max(max, curWidth);
  }

  return max;
}

function test() {
  let head = new Node(5);
  head.left = new Node(3);
  head.right = new Node(8);
  head.left.left = new Node(2);
  head.left.right = new Node(4);
  head.right.left = new Node(2);
  head.right.right = new Node(4);
  // head.left.left.left = new Node(1);
  // head.right.left = new Node(7);
  // head.right.left.left = new Node(6);
  // head.right.right = new Node(10);
  // head.right.right.left = new Node(9);
  // head.right.right.right = new Node(11);

  console.log(`------getMaxWidth(head)------`);
  console.log(getMaxWidth1(head));
}

test();
