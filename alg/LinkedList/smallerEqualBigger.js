const {
  generateRandomArray,
  swap,
  copyArray,
  isEqualArray,
} = require("../utils");

// 将单链表按照值和分成左边小，中间相等，右边大的样子
class Node {
  constructor(val, next) {
    this.value = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

function smallerEqualBigger1(head) {
  let arr = [];

  let cur = head;
  while (cur !== null) {
    arr.push(cur);
    cur = cur.next;
  }

  //
  // arr.sort((a, b) => a.value - b.value);
  quickSort(arr);
  head = arr[0];
  cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = arr[i];
    cur = cur.next;
  }
  cur.next = null;
  return head;
}

// 用值区分
function smallerEqualBigger2(head, num) {
  if (head === null || head.next === null) {
    return head;
  }
  let sH = null;
  let sT = null;
  let eH = null;
  let eT = null;
  let bH = null;
  let bT = null;

  while (head !== null) {
    if (head.value < num) {
      if (sT === null) {
        sH = head;
        sT = head;
      } else {
        sT.next = head;
        sT = sT.next;
      }
    } else if (head.value === num) {
      if (eT === null) {
        eH = head;
        eT = eH;
      } else {
        eT.next = head;
        eT = eT.next;
      }
    } else {
      if (bT === null) {
        bH = head;
        bT = bH;
      } else {
        bT.next = head;
        bT = bT.next;
      }
    }
    head = head.next;
  }

  // 先串联，再判断头在哪
  if (sT != null) {
    sT.next = eH;
    eT = eT == null ? sT : eT;
  }

  if (eT !== null) {
    eT.next = bH;
    bT = bT == null ? eT : bT;
  }

  bT.next = null;

  return sH !== null ? sH : eH !== null ? eH : bH;
}

function comparator(arr, compare) {
  arr.sort(compare);
}

function quickSort(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }

  quickSort1(arr, 0, arr.length - 1);
}

function quickSort1(arr, l, r) {
  if (l >= r) {
    return;
  }

  let randomIndex = l + parseInt((r - l + 1) * Math.random());

  swap(arr, randomIndex, r);

  let less = l - 1;
  let more = r;
  let cur = l;

  while (cur < more) {
    if (arr[cur].value < arr[r].value) {
      swap(arr, cur++, ++less);
    } else if (arr[cur].value > arr[r].value) {
      swap(arr, cur, --more);
    } else {
      cur++;
    }
  }

  swap(arr, r, more++);
  quickSort1(arr, l, less);
  quickSort1(arr, more, r);
}

function printLinkedList(head) {
  console.log("linkedList:" + " ");
  while (head !== null) {
    console.log(head.value + " ");
    head = head.next;
  }
}

function generateRandomLinkedList(maxSize, maxValue) {
  let arr = generateRandomArray();
  let cur = new Node(arr[0]);
  let head = cur;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new Node(arr[i]);
    cur = cur.next;
  }

  return head;
}

function test() {
  let head1 = new Node(7);
  head1.next = new Node(9);
  head1.next.next = new Node(1);
  head1.next.next.next = new Node(8);
  head1.next.next.next.next = new Node(5);
  head1.next.next.next.next.next = new Node(2);
  head1.next.next.next.next.next.next = new Node(5);
  printLinkedList(head1);
  let head2 = smallerEqualBigger2(head1, 5);
  printLinkedList(head2);
}

test();

function main() {
  let testTimes = 1;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);

    quickSort(arr1);
    comparator(arr2);

    if (!isEqualArray(arr1, arr2)) {
      succeed = false;
      console.log(`------arr1,arr2------`);
      console.log(arr1, arr2);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

// main();
