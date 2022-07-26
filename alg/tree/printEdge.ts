type edgeMapType = Array<TreeNode[]>;

class TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value?: any,
    left?: TreeNode | undefined,
    right?: TreeNode | undefined
  ) {
    this.value = value === undefined ? null : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function printEdge(head: TreeNode): void {
  if (head === null) {
    return;
  }

  let height: number = getHeight(head, 0);
  let edgeMap: edgeMapType = new Array(height);
  for (let i: number = 0; i < edgeMap.length; i++) {
    edgeMap[i] = new Array(2);
  }

  setEdgeMap(head, 0, edgeMap);

  console.log(`------edgeMap------`);
  console.log(edgeMap);

  // 打印左边界
  for (let i: number = 0; i != edgeMap.length; i++) {
    console.log(edgeMap[i][0].value + " ");
  }

  // 打印既不是左边界，也不是右边界的叶子节点
  printLeafNotInMap(head, 0, edgeMap);

  // 打印有边界，但不是左边界的节点
  for (let i: number = edgeMap.length - 1; i > -1; i--) {
    if (edgeMap[i][0] != edgeMap[i][1]) {
      console.log(edgeMap[i][1].value + " ");
    }
  }
}

function getHeight(head: TreeNode, curLevel: number): number {
  if (head === null) {
    return curLevel;
  }

  return Math.max(
    getHeight(head.left, curLevel + 1),
    getHeight(head.right, curLevel + 1)
  );
}

function setEdgeMap(
  head: TreeNode,
  curLevel: number,
  edgeMap: edgeMapType
): void {
  if (head === null) {
    return;
  }

  // 第一个遍历到这一层的left
  edgeMap[curLevel][0] =
    edgeMap[curLevel][0] === undefined ? head : edgeMap[curLevel][0];

  // 最后一个到这一层
  edgeMap[curLevel][1] = head;

  setEdgeMap(head.left, curLevel + 1, edgeMap);
  setEdgeMap(head.right, curLevel + 1, edgeMap);
}

function printLeafNotInMap(h: TreeNode, l: number, m: edgeMapType): void {
  if (h === null) {
    return;
  }
  if (h.left === null && h.right === null && h != m[l][0] && h != m[l][1]) {
    console.log(h.value + " ");
  }

  printLeafNotInMap(h.left, l + 1, m);
  printLeafNotInMap(h.right, l + 1, m);
}

function printEdge2(head: TreeNode): void {
  if (head === null) {
    return;
  }

  console.log(head.value + " ");
  if (head.left !== null && head.right !== null) {
    printLeftEdge(head.left, true);
    printRightEdge(head.right, true);
  } else {
    printEdge2(head.left !== null ? head.left : head.right);
  }
}

function printLeftEdge(h: TreeNode, print: boolean) {
  if (h === null) {
    return;
  }
  if (print || (h.left === null && h.right === null)) {
    console.log(h.value + " ");
  }
  printLeftEdge(h.left, print);
  printLeftEdge(h.right, print && h.left === null ? true : false);
}

function printRightEdge(h: TreeNode, print: boolean) {
  if (h === null) {
    return;
  }
}

function test() {
  let h: TreeNode = new TreeNode(1);
  h.left = new TreeNode(2);
  h.right = new TreeNode(3);
  h.left.right = new TreeNode(4);
  h.right.left = new TreeNode(5);
  h.right.right = new TreeNode(6);
  h.left.right.left = new TreeNode(7);
  h.left.right.right = new TreeNode(8);
  h.right.left.left = new TreeNode(9);
  h.right.left.left = new TreeNode(10);
  h.left.right.right.right = new TreeNode(11);
  h.right.left.left.left = new TreeNode(12);
  h.left.right.right.right.left = new TreeNode(13);
  h.left.right.right.right.right = new TreeNode(14);
  h.right.left.left.left.left = new TreeNode(15);
  h.right.left.left.left.right = new TreeNode(16);

  printEdge(h);
}

test();
