// 复制含有随机指针的链表
class Node {
  constructor(val, next, random) {
    this.value = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyListWithRandom1(head) {
  // 利用链表一对一的关系省掉哈希表
  let cur = head;

  let next = null;
  while (cur != null) {
    next = cur.next;
    cur.next = new Node(cur.value);
    cur.next.next = next;

    cur = next;
  }

  // 遍历一次设置random
  cur = head;
  while (cur !== null) {
    cur.next.random = cur.random !== null ? cur.random.next : null;
    cur = cur.next.next;
  }

  // 分离链表

  cur = head;
  let res = head.next;

  while (cur !== null) {
    next = cur.next.next;
    copyCur = cur.next;
    cur.next = next;
    copyCur.next = next != null ? next.next : null;
  }

  return res;
}

function copyListWithRandom2(head) {
  let head1 = null;
  let m = new Map();

  let cur = head;
  while (cur != null) {
    let temp = new Node(cur.value);
    m.set(cur, temp);
    cur = cur.next;
  }

  cur = head;
  while (cur != null) {
    m.get(cur).next = cur.next === null ? null : m.get(cur.next);
    m.get(cur).random = cur.random === null ? null : m.get(cur.random);

    cur = cur.next;
  }

  return m.get(head);
}

function test() {
  let head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(3);
  head1.random = head1.next.next;
  head1.next.random = head1;
  head1.next.next.random = head1.next;

  let head2 = copyListWithRandom2(head1);
  console.log(head1);
}

test();
