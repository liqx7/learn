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
    return bothLoop(head1, head2, loop1, loop2);
  }
  return null;
}

// function noLoop(head1, head2) {
//   if (head1 == null || head2 == null) {
//     return null;
//   }
//   let n1 = head1;
//   let n2 = head2;
//   let len1 = 1;
//   let len2 = 1;

//   while (n1.next !== null) {
//     len1++;
//     n1 = n1.next;
//   }

//   while (n2.next !== null) {
//     len2++;
//     n2 = n2.next;
//   }

//   // end
//   if (n1 !== n2) {
//     return null;
//   }

//   n1 = head1;
//   n2 = head2;

//   for (let i = 0; i < len1 - len2; i++) {
//     n1 = n1.next;
//   }

//   for (let i = 0; i < len2 - len2; i++) {
//     n2 = n2.next;
//   }

//   while (n1 !== null) {
//     if (n1 == n2) {
//       return n1;
//     }
//     n1 = n1.next;
//     n2 = n2.next;
//   }

//   return null;

// }

function noLoop(head1, head2) {
  if (head1 === null || head2 == null) {
    return null;
  }

  let cur1 = head1;
  let cur2 = head2;
  let n = 0; //记录差值

  while (cur1 !== null) {
    n++;
    cur1 = cur1.next;
  }

  while (cur2 != null) {
    n--;

    cur2 = cur2.next;
  }

  // 无论哪个长都放到cur1
  cur1 = n > 0 ? head1 : head2;
  cur2 = cur1 === head1 ? head2 : head1;
  n = Math.abs(n);

  while (n != 0) {
    n--;
    cur1 = cur1.next;
  }

  while (cur1 != cur2) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  return cur2;
}

function bothLoop(head1, head2, loop1, loop2) {
  let cur1 = null;
  let cur2 = null;
  if (loop1 === loop2) {
    //变成五环列表的相交
    cur1 = head1;
    cur2 = head2;
    let n = 0;

    while (cur1 != loop1) {
      n++;
      cur1 = cur1.next;
    }
    while (cur2 != loop1) {
      n--;
      cur2 = cur2.next;
    }
    cur1 = n > 0 ? head1 : head2;
    cur2 = cur1 === head1 ? head2 : head1;
    n = Math.abs(n);

    while (n != 0) {
      n--;
      cur1 = cur1.next;
    }

    while (cur1 != cur2) {
      cur1 = cur1.next;
      cur2 = cur2.next;
    }
    return cur1;
  } else {
    cur1 = loop1.next;
    while (cur1 != loop1) {
      // return to loop before can meet loop2
      if (cur1 == loop2) {
        return loop1;
      }
      cur1 = cur1.next;
    }
    return null;
  }
}

function main() {
  // let head1 = new Node(1);
  // head1.next = new Node(2);
  // head1.next.next = new Node(3);
  // let head2 = new Node(2);
  // head2.next = head1.next.next;

  // console.log(getIntersectNode(head1, head2));

  // 1->2->3->4->5->6->7->null
  let head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(3);
  head1.next.next.next = new Node(4);
  head1.next.next.next.next = new Node(5);
  head1.next.next.next.next.next = new Node(6);
  head1.next.next.next.next.next.next = new Node(7);

  // 0->9->8->6->7->null
  let head2 = new Node(0);
  head2.next = new Node(9);
  head2.next.next = new Node(8);
  head2.next.next.next = head1.next.next.next.next.next; // 8->6
  console.log(getIntersectNode(head1, head2).value);

  // 1->2->3->4->5->6->7->4...
  head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(3);
  head1.next.next.next = new Node(4);
  head1.next.next.next.next = new Node(5);
  head1.next.next.next.next.next = new Node(6);
  head1.next.next.next.next.next.next = new Node(7);
  head1.next.next.next.next.next.next = head1.next.next.next; // 7->4

  // 0->9->8->2...
  head2 = new Node(0);
  head2.next = new Node(9);
  head2.next.next = new Node(8);
  head2.next.next.next = head1.next; // 8->2
  console.log(getIntersectNode(head1, head2).value);

  // 0->9->8->6->4->5->6..
  head2 = new Node(0);
  head2.next = new Node(9);
  head2.next.next = new Node(8);
  head2.next.next.next = head1.next.next.next.next.next; // 8->6
  console.log(getIntersectNode(head1, head2).value);
}

main();
