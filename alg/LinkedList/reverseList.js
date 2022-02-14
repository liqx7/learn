// 回文链表

class Node {
  constructor(val, next) {
    this.value = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head) {
  let pre = null;
  let next = null;
  while (head !== null) {
    // 第一步取到next,pre在上一步准别好了
    next = head.next;
    // 只改变head发出的指针，遍历可以吧每个点都改好
    head.next = pre;
    // pre先后移，head在后移，head移到null的时候，前一个pre刚好是最后（翻转的第一个）
    pre = head;
    head = next;
  }
  return pre;
}

class DoubleNode {
  constructor(val, pre, next) {
    this.value = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.pre = pre === undefined ? null : pre;
  }
}

function reverseDoubleList(head) {
  let pre = null;
  let next = null;
  while (head !== null) {
    // 第一步取到next,pre在上一步准别好了
    next = head.next;
    // 只改变head发出的指针，遍历可以吧每个点都改好
    head.next = pre;
    head.pre = next;
    // pre先后移，head在后移，head移到null的时候，前一个pre刚好是最后（翻转的第一个）
    pre = head;
    head = next;
  }
}

function printLinkedList(head) {
  console.log("linked List: ");
  while (head != null) {
    console.log(head.value + " ");
    head = head.next;
  }
}

function printDoubleLinkedList(head) {
  console.log("Double Linked List: ");

  let end = null;

  while (head != null) {
    // head走到null的时候还需记录走到的最后一个节点，再返回
    console.log(head.value + " ");
    end = head;
    head = head.next;
  }

  while (end != null) {
    console.log(end.value + " ");
    end = end.pre;
  }
}
function test() {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  printLinkedList(head);

  head1 = reverseList(head);

  printLinkedList(head1);

  let head2 = new DoubleNode(1);
  head2.next = new DoubleNode(2);
  head2.next.pre = head2;
  head2.next.next = new DoubleNode(3);
  head2.next.next.pre = head2.next;
  head2.next.next.next = new DoubleNode(4);
  head2.next.next.next.pre = head2.next.next;

  console.log(`------head2------`);
  console.log(head2);

  printDoubleLinkedList(head2);
  printDoubleLinkedList(reverseDoubleList(head2));
}

test();
