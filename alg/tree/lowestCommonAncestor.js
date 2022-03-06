// 最低公共祖先

const Node = require("./TreeNode");

function lowestAncestor(head, o1, o2) {
  if (head === null || head === o1 || head === o2) {
    return head;
  }

  // 向左边要信息是有o1吗，有o2吗，有共同祖先吗，返回值要么是o1,要么是o2,要么是公共祖先k
  let left = lowestAncestor(head.left, o1, o2);
  let right = lowestAncestor(head.right, o1, o2);
  if (left !== null && right !== null) {
    // 两边都有值，那肯定是一个o1,一个o2,将公共祖先k返回
    return head;
  }
  return left != null ? left : right;
}

// hashmap
function lowestCommon(head, o1, o2) {
  let fatherMap = new Map();

  // 遍历整个
  process(head, fatherMap);
  let O1Set = new Set();

  while (fatherMap.get(o1) !== o1) {
    O1Set.add(o1);
    o1 = fatherMap.get(o1);
  }

  while (fatherMap.get(o2) !== o2) {
    if (O1Set.has(o2)) {
      return o2;
    }
    o2 = fatherMap.get(o2);
  }

  return o2;
}

function process(head, fatherMap) {
  if (head === null) {
    return;
  }

  fatherMap.set(head.left, head);
  fatherMap.set(head.right, head);
  process(head.left, fatherMap);
  process(head.right, fatherMap);
}

function test() {
  let head = new Node(1);
  head.left = new Node(2);
  head.right = new Node(3);
  head.left.left = new Node(4);
  head.left.right = new Node(5);
  head.right.left = new Node(6);
  head.right.right = new Node(7);
  head.right.right.left = new Node(8);
  // printTree(head);
  console.log("===============");

  let o1 = head.left.right;
  let o2 = head.right.left;

  console.log("o1 : " + o1.value);
  console.log("o2 : " + o2.value);
  console.log("ancestor : " + lowestAncestor(head, o1, o2).value);
  console.log("===============");
}

test();
