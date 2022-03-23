//

const DoubleNode = require("./DoubleNode");
const Node = require("./Node");

function removeLastKthNode(h, K) {
  if (h === null || K < 1) {
    return;
  }

  let n = h;

  while (n !== null) {
    K--;
    n = n.next;
  }

  if (K > 0) {
    return h;
  } else if (K === 0) {
    return h.next;
  } else {
    n = h;

    while (++K != 0) {
      n = n.next;
    }
    n.next = n.next.next;
    return h;
  }
}

function removeDoubleLastKthNode(h, k) {
  if (h === null || k < 1) {
    return;
  }

  let cur = h;
  while (cur !== null) {
    k--;
    cur = cur.next;
  }

  if (k > 0) {
    return h;
  } else if (k === 0) {
    h.next.last = null;
    return h.next;
  } else {
    cur = h;

    while (++k !== 0) {
      cur = cur.next;
    }

    cur.next.next.last = cur;
    cur.next = cur.next.next;

    return h;
  }
}

function test() {
  // let h = new Node(1);
  // h.next = new Node(2);
  // h.next.next = new Node(3);
  // h.next.next.next = new Node(4);

  // console.log(removeLastKthNode(h, 2));

  let h1 = new DoubleNode(1);
  h1.next = new DoubleNode(2);
  h1.next.last = h1;

  h1.next.next = new DoubleNode(3);
  h1.next.next.last = h1.next;
  console.log(removeDoubleLastKthNode(h1, 2));
}

test();
