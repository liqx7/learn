// 每k个节点逆序

const Node = require("./Node");

function reverseKNode(h, k) {
  if (h === null || k < 2) {
    return h;
  }

  let cur = h;
  let count = 0;

  let pre = null;

  let curTail = null;

  let preTail = null;
  let next = null;
  while (cur !== null) {
    curTail = cur;
    while (count++ < k && cur != null) {
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    if (preTail) {
      // 上一轮的tail挂到头部
      preTail.next = pre;
    } else {
      newH = pre;
    }

    // 准备
    preTail = curTail;
    pre = null;
    count = 0;
  }

  return newH;
}

function test() {
  let h = new Node(1);
  h.next = new Node(2);
  h.next.next = new Node(3);
  h.next.next.next = new Node(4);
  h.next.next.next.next = new Node(5);
  // h.next.next.next.next.next = new Node(6);

  let res = reverseKNode(h, 2);

  while (res != null) {
    console.log(res.value);
    res = res.next;
  }
}

test();
