// 单调栈
class Node {
  constructor(value, next) {
    this.value = value == undefined ? null : value;
    this.next = next === undefined ? null : next;
  }
}

function getNearLyBiggerNum(arr) {
  if (arr === null || arr.length < 1) {
    return null;
  }
  let stack = [];
  let res = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let waitNode = new Node(i);
    while (stack.length > 0) {
      //弹出一个栈顶比较
      let topNode = stack.pop();

      // 如果当前数比栈顶小，把栈顶和当前节点压栈，下一个数
      if (arr[i] < arr[topNode.value]) {
        stack.push(topNode);
        break;
      }
      // 如果当前数跟栈顶一样大，加入到栈顶的头节点，把新链表压回去
      else if (arr[i] == arr[topNode.value]) {
        waitNode.next = topNode;
        break;
      }
      // 如果当前数比栈顶大，找到了，把这一层栈的链表的所有index都处理了，继续比较当前节点和下一个栈顶
      else {
        // 下一层的index
        let leftNode = stack.length > 0 ? stack[stack.length - 1] : null;
        let rightNode = waitNode;

        // 处理整条链表
        popLink(topNode, res, leftNode, rightNode);

        // 处理完之后，继续比较当前数跟新栈顶
      }
    }

    // 当前数字把栈比空了

    stack.push(waitNode);
  }

  while (stack.length > 0) {
    let topNode = stack.pop();
    // topNode全处理
    let leftNode = stack.length > 0 ? stack[stack.length - 1] : null;
    let rightNode = null;
    popLink(topNode, res, leftNode, rightNode);
  }

  return res;
}

function popLink(node, res, leftNode, rightNode) {
  let cur = node;

  while (cur != null) {
    res[cur.value] = {
      left: leftNode ? leftNode.left : -1,
      right: rightNode ? rightNode.value : -1,
    };
    cur = cur.next;
  }
}

function test() {
  let arr = [4, 5, 2, 4, 7, 9, 1, 0, 6];

  let res = getNearLyBiggerNum(arr);

  console.dir(`------res------`);
  console.dir(res);
}

test();
