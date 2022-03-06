// 找到两个列表第一次香蕉的节点

class Node {
  constructor(value, next) {
    this.value = value === undefined ? null : value;
    this.next = next === undefined ? null : next;
  }
}

function getLoopNode(head) {
  if (head === null || head.next == null) {
    return null;
  }
  let n1 = head;
  let n2 = head;

  n1 = n1.next.next;
  n2 = n2;
  while (n1 !== n2) {
    if (n1.next == null || n1.next.next === null) {
      return null;
    }
    n1 = n1.next.next;
    n2 = n2.next;
  } //相遇节点

  // 将快指针放回起点
  n1 = head;
  while (n1 !== n2) {
    n1 = n1.next;
    n2 = n2.next;
  }
  // 此时相遇的一定是loop节点
  return n1;
}

function getIntersrctNode(head1,head2){
  if(head1===null||head2==null){
    return null
  }
  let loop1=getLoopNode(head1)
  let loop2=getLoopNode(head2)
  if(loop1==null&&loop2===null){
    return noLoop(head1,head2)

  }

  if(loop1!=null&&loop2!==null){
    return bothLoop(head1,head2)
  }

  return null
}

function noLoop(head1,head2){
  let c1=head1
  let c2=head2
  let len1=0
  let len2=0

  while(c1!==null){
    c1=
  }
}

function test() {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = head;

  console.log(getLoopNode(head));
}

test();
