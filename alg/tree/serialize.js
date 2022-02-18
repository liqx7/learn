// 序列化和反序列化

const Node = require("./TreeNode");

function serialByPre(head) {
  if (head == null) {
    return "#!";
  }
  let str = head.value + "!";
  str += serialByPre(head.left);
  str += serialByPre(head.right);
  return str;
}

function reconByPreString(str) {
  let arr = str.split("!");
  if (arr.length === 0) {
    return null;
  }
  arr.pop();
  let res = reconPreOrder(arr);
  console.log(reconPreOrder(arr));
  return reconPreOrder(arr);
}

// 弹出一个数，构成节点
function reconPreOrder(arr) {
  let value = arr.shift();
  if (value === "#") {
    return null;
  } // 弹出一个数作为节点

  // 先头
  let head = new Node(Number(value));
  // 左子树
  head.left = reconPreOrder(arr); //再弹出下一个数做left
  // 右子树
  head.right = reconPreOrder(arr);
  return head;
}

function serialByLevel(head) {
  if (head === null) {
    return "#";
  }

  let str = "";
  let arr = [];

  arr.push(head);
  str += head.value + "!";

  while (arr.length > 0) {
    head = arr.shift();

    // 放入的时候加#
    if (head.left != null) {
      str += head.left.value + "!";
      arr.push(head.left);
    } else {
      str += "#!";
    }
    if (head.right !== null) {
      arr.push(head.right);
      str += head.right.value + "!";
    } else {
      str += "#!";
    }
  }

  return str;
}

function reconByLevelString(str) {
  let strArr = str.split("!");
  strArr.pop();
  let treeArr = [];
  let index = 0;

  let head = generateNodeByString(strArr[index++]);

  if (head !== null) {
    treeArr.push(head);
  }

  let node = null;
  while (treeArr.length > 0) {
    node = treeArr.shift(); //树队列为了维持树形状，弹出的数就是要处理的节点
    node.left = generateNodeByString(strArr[index++]);
    node.right = generateNodeByString(strArr[index++]);
    if (node.left !== null) {
      treeArr.push(node.left);
    }
    if (node.right !== null) {
      treeArr.push(node.right);
    }
  }

  return head;
}

function generateNodeByString(str) {
  if (str == "#") {
    return null;
  }
  return new Node(str);
}

function serialByIn(head) {
  if (head === null) {
    return "#!";
  }

  let str = "";

  str += serialByIn(head.left);
  str += head.value + "!";
  str += serialByIn(head.right);

  return str;
}

function reconByInString(str) {
  let arr = str.split("!");

  let head = reconByIn(arr);
  return arr;
}

// 从一个队列构成数
function reconByIn(arr) {
  if (arr.length === 0) {
    return null;
  }

  let head = nul;

  // 先构造左树
  let left = reconByIn(arr);
  // 弹出一个数
  let value = arr.shift(); //用于组成当前节点，减少了一个
  if (value === "#") {
    head = null;
  } else {
    head = new Node(value);
  }

  let right = reconByIn(arr);

  if (left != null) {
    head.left = left;
  }
  if (right != null) {
    head.right = right;
  }
  return head;
}

function serialByPos(head) {
  if (head === null) {
    return "#!";
  }

  let str = "";

  str += serialByPos(head.left);
  str += serialByPos(head.right);
  str += head.value;
  return str;
}

function reconByPosString(str) {
  let arr = str.split("!");

  // 根据后续队列生成树
  return reconByPosOrder(arr);
}

function reconByPosOrder(arr) {
  if (arr.length === 0) {
    return null;
  }

  let head = null;
  let left = reconByPosOrder(arr);
  let right = reconByPosOrder(arr);
  let value = arr.shift();
  if (value === "#") {
    head = null;
  } else {
    head = new Node(value);
    head.left = left;
    head.right = right;
  }
}

function test() {
  let head = new Node(1);
  head.left = new Node(2);
  head.right = new Node(3);
  head.left.left = new Node(4);
  head.right.right = new Node(5);
  //  printTree(head);

  // pre = serialByPre(head);
  // console.log("serialize tree by pre-order: " + pre);
  // head = reconByPreString(pre);
  // console.log("reconstruct tree by pre-order, ", head);
  // printTree(head);

  level = serialByLevel(head);
  console.log("serialize tree by level: " + level);
  head = reconByLevelString(level);
  console.log("reconstruct tree by level, ", head);
  // printTree(head);

  console.log("====================================");

  // head = new Node(100);
  // head.left = new Node(21);
  // head.left.left = new Node(37);
  // head.right = new Node(-42);
  // head.right.left = new Node(0);
  // head.right.right = new Node(666);
  // // printTree(head);

  // pre = serialByPre(head);
  // console.log("serialize tree by pre-order: " + pre);
  // head = reconByPreString(pre);
  // console.log("reconstruct tree by pre-order, ");
  // // printTree(head);

  // level = serialByLevel(head);
  // console.log("serialize tree by level: " + level);
  // head = reconByLevelString(level);
  // console.log("reconstruct tree by level, ");
  // // printTree(head);

  // console.log("====================================");
}

test();
