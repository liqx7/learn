// 找到两个链表共同节点
class Node {
  constructor(value, next) {
    this.value = value == undefined ? null : value;
    this.next = next == undefined ? null : next;
  }
}

function getLoopNode(head) {
  if (head === null || head.next === null || head.next.next === null) {
    return null;
  }

  let n1 = head.next;
  let n2 = head.next.next;

  while (n1 != n2) {
    if (n2.next == null || n2.next.next === null) {
      return null;
    }
    n2 = n2.next.next;
    n1 = n1.next;
  }

  // 相遇
  n2 = head;
  while (n1 != n2) {
    n1 = n1.next;
    n2 = n2.next;
  }

  return n1;
}

function getIntersectNode(head1, head2) {
  if (head1 === null || head2 === null) {
    return null;
  }

  let loop1 = getLoopNode(head1);
  let loop2 = getLoopNode(head2);
  if (loop1 === null && loop2 === null) {
    return noLoop(head1, head2);
  }
  if (loop1 != null && loop2 != null) {
    return bothLoop(head1, head2);
  }
  return null;
}

function noLoop(head1, head2) {
  if (head1 == null || head2 == null) {
    return null;
  }
  let n1 = head1;
  let len1 = 1;
  let n2 = head2;
  let len2 = 1;

  while (n1.next !== null) {
    len1++;
    n1 = n1.next;
  }

  while (n2.next !== null) {
    len2++;
    n2 = n2.next;
  }

  // end
  if (n1 !== n2) {
    return null;
  }

  n1 = head1;
  n2 = head2;

  for (let i = 0; i < len1 - len2; i++) {
    n1 = n1.next;
  }

  for (let i = 0; i < len2 - len2; i++) {
    n2 = n2.next;
  }

  while (n1 !== null) {
    if (n1 == n2) {
      return n1;
    }
    n1 = n1.next;
    n2 = n2.next;
  }

  return null;
}

function main() {
  let head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(3);
  let head2 = new Node(2);
  head2.next = head1.next.next;

  console.log(getIntersectNode(head1, head2));
}

main();
