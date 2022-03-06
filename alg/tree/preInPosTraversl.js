// 递归序

class Node {
  constructor(value, left, right) {
    this.value = value === undefined ? null : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

//
function orderRecur(head) {
  if (head === null) {
    return;
  }

  // 第一次进改节点

  orderRecur(head.left); // 递归左树

  // 第二次进到节点

  orderRecur(head.right); // 递归右树

  // 第三次回到节点
}

function preOrderRecur(head) {
  if (head === null) {
    return;
  }

  console.log(head.value);
  preOrderRecur(head.left);
  preOrderRecur(head.right);
}

function inOrderRecur(head) {
  if (head === null) {
    return;
  }

  inOrderRecur(head.left);
  console.log(head.value);
  inOrderRecur(head.right);
}

function posOrderRecur(head) {
  if (head === null) {
    return;
  }

  posOrderRecur(head.left);
  posOrderRecur(head.right);
  console.log(head.value);
}

function preOrderUnRecur(head) {
  let arr = [];
  // 弹出打印，一次放进右边左边
  if (head === null) {
    return;
  }

  arr.push(head); // head是当前点
  while (arr.length > 0) {
    head = arr.pop();
    console.log(head.value);
    head.right && arr.push(head.right);
    head.left && arr.push(head.left);
  }
}

function posOrderUnRecur(head) {
  if (head === null) {
    return;
  }

  let arr = [];
  let help = [];
  arr.push(head);

  while (arr.length > 0) {
    head = arr.pop();
    help.push(head);
    head.left && arr.push(head.left);
    head.right && arr.push(head.right);
  }

  while (help.length > 0) {
    console.log(help.pop().value);
  }
}

function inOrderUnRecur(head) {
  if (head === null) {
    return;
  }

  let arr = [];
  // arr.push(head);
  // head=head.left
  // while (arr.length > 0) {
  //   // 沿着左边界一路放进去
  //   // while (head) {
  //   //   arr.push(head);
  //   //   head=head.left
  //   // }
  //   // head = arr.pop();
  //   // console.log(head.value);
  //   // if (head.right) {
  //   //   head=head.right
  //   // }
  // }
  while (arr.length > 0 || head != null) {
    // 当前点
    if (head != null) {
      arr.push(head);
      head = head.left;
    } else {
      head = arr.pop();
      console.log(head.value);
      head = head.right;
    }
  }
}

function test() {
  let head = new Node(5);
  head.left = new Node(3);
  head.right = new Node(8);
  head.left.left = new Node(2);
  head.left.right = new Node(4);
  head.left.left.left = new Node(1);
  head.right.left = new Node(7);
  head.right.left.left = new Node(6);
  head.right.right = new Node(10);
  head.right.right.left = new Node(9);
  head.right.right.right = new Node(11);

  // recursive
  console.log("==============recursive==============");
  // console.log("pre-order: ");
  // preOrderRecur(head);
  // console.log();
  // console.log("in-order: ");
  // inOrderRecur(head);
  // console.log();
  console.log("pos-order: ");
  posOrderRecur(head);
  // console.log();

  // unrecursive
  console.log("============unrecursive=============");
  //  console.log("pre-order: ");
  //  preOrderUnRecur(head);
  // console.log("in-order: ");
  // inOrderUnRecur(head);
  console.log("pos-order: ");
  posOrderUnRecur(head);
  //  posOrderUnRecur2(head);
}

test();
