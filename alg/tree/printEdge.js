var TreeNode = /** @class */ (function () {
    function TreeNode(value, left, right) {
        this.value = value === undefined ? null : value;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function printEdge(head) {
    if (head === null) {
        return;
    }
    var height = getHeight(head, 0);
    var edgeMap = new Array(height);
    for (var i = 0; i < edgeMap.length; i++) {
        edgeMap[i] = new Array(2);
    }
    setEdgeMap(head, 0, edgeMap);
    console.log("------edgeMap------");
    console.log(edgeMap);
    // 打印左边界
    for (var i = 0; i != edgeMap.length; i++) {
        console.log(edgeMap[i][0].value + " ");
    }
    // 打印既不是左边界，也不是右边界的叶子节点
    printLeafNotInMap(head, 0, edgeMap);
    // 打印有边界，但不是左边界的节点
    for (var i = edgeMap.length - 1; i > -1; i--) {
        if (edgeMap[i][0] != edgeMap[i][1]) {
            console.log(edgeMap[i][1].value + " ");
        }
    }
}
function getHeight(head, curLevel) {
    if (head === null) {
        return curLevel;
    }
    return Math.max(getHeight(head.left, curLevel + 1), getHeight(head.right, curLevel + 1));
}
function setEdgeMap(head, curLevel, edgeMap) {
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
function printLeafNotInMap(h, l, m) {
    if (h === null) {
        return;
    }
    if (h.left === null && h.right === null && h != m[l][0] && h != m[l][1]) {
        console.log(h.value + " ");
    }
    printLeafNotInMap(h.left, l + 1, m);
    printLeafNotInMap(h.right, l + 1, m);
}
function test() {
    var h = new TreeNode(1);
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
