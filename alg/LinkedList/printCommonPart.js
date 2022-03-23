// 给定两个有序链表的头指针head1和head2，打印两个链表的公共部分。

const Node = require("./Node");

function printCommonPart(h1, h2) {
  if (h1 === null || h2 === null) {
    return null;
  }

  while (h1 !== null && h2 !== null) {
    if (h1.value < h2.value) {
      h1 = h1.next;
    } else if (h1.value > h2.value) {
      h2 = h2.next;
    } else {
      console.log(h1.value);
      h1 = h1.next;
      h2 = h2.next;
    }
  }
}

function test() {
  let h1 = new Node(1);
  h1.next = new Node(2);
  h1.next.next = new Node(3);

  let h2 = new Node(2);
  h2.next = new Node(3);

  printCommonPart(h1, h2);
}

test();
