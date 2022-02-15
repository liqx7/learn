// 翻转链表
class Node {
  constructor(val, next) {
    this.value = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

function printLinkedList(head) {
  while (head !== null) {
    console.log(head.value + "");
    head = head.next;
  }
}

function reserveList(head) {
  let pre = null;
  let next = null;

  while (head !== null) {
    next = head.next;

    head.next = pre;

    pre = head;
    head = next;
  }

  return pre;
}

class DoubleNode {
  constructor(val, pre, next) {
    this.value = val === undefined ? null : val;
    this.last = pre === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

function printDoubleLinkedList(head) {
  let end = null;
  while (head !== null) {
    console.log(head.value + " ");
    end = head;
    head = head.next;
  }

  while (end !== null) {
    console.log(end.value + " ");
    end = end.last;
  }
}

function reserveDoubleLinkedList(head) {
  let pre = null;
  let next = null;

  while (head !== null) {
    next = head.next;

    head.next = pre;
    head.last = next;

    pre = head;
    head = next;
  }

  return pre;
}

function test() {
  let head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(3);

  // printLinkedList(head1);
  // printLinkedList(reserveList(head1));

  let head2 = new DoubleNode(1);
  head2.next = new DoubleNode(2);
  head2.next.last = head2;
  head2.next.next = new DoubleNode(3);
  head2.next.next.last = head2.next;
  head2.next.next.next = new DoubleNode(4);
  head2.next.next.next.last = head2.next.next;

  // printDoubleLinkedList(head2);
  printDoubleLinkedList(reserveDoubleLinkedList(head2));
}

test();
