"use strict";
// 是否回文列表
exports.__esModule = true;
var LinkedNode = /** @class */ (function () {
  function LinkedNode(val, next) {
    this.value = val == undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
  return LinkedNode;
})();
function isPalindrome1(head) {
  var arr = [];
  var head1 = head;
  var res = true;
  while (head1 !== null) {
    arr.push(head1.value);
    head1 = head1.next;
  }
  while (head !== null) {
    if (head.value !== arr.pop()) {
      res = false;
      break;
    }
    head = head.next;
  }
  return res;
}

//  need n/2 extra space
function isPalindrome2(head) {
  if (head === null || head.next === null) {
    return true;
  }

  // 1 2 3 4 5 6
  let right = head.next;
  let cur = head;
  while (cur.next !== null && cur.next.next !== null) {
    // 可以跳跃
    cur = cur.next.next;
    right = right.next;
  }

  // 取到右侧指针了
  let arr = [];
  while (right != null) {
    arr.push(right);
    right = right.next;
  }

  while (arr.length > 0) {
    if (head.value != arr.pop().value) {
      return false;
    }

    head = head.next;
  }
  return true;
}

// need O(1) extra space
function isPalindrome3(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let res = true;

  // 1 2 3 4 5 6
  let n1 = head;
  let n2 = head;

  while (n1.next !== null && n1.next.next !== null) {
    n1 = n1.next.next;
    n2 = n2.next;
  } // n2到3

  // 从3开始逆序
  let n3 = null; // 作为pre
  while (n2 !== null) {
    n1 = n2.next;

    n2.next = n3;

    n3 = n2;
    n2 = n1;
  } // n3作为pre 到了end

  //保存end
  n2 = n3; // n2为end
  n1 = head;
  // 向中间走
  while (n1 !== null && n3 !== null) {
    if (n1.value !== n3.value) {
      res = false;

      break;
    }
    n1 = n1.next;
    n3 = n3.next;
  } // n1走到3后面 n2走到3或者4后面

  // 恢复链
  n1 = null; // 作为pre
  while (n2 !== null) {
    n3 = n2.next;

    n2.next = n1;
    n1 = n2;
    n2 = n3;
  }

  return res;
}

function printLinkedList(head) {
  while (head != null) {
    console.log(head.value + " ");
    head = head.next;
  }
}

function main() {
  var testTimes = 50;
  var maxSize = 10;
  var maxValue = 10;
  var succeed = true;
  //  for(let i:number=0;i<testTimes;i++){
  //  }
  var head = new LinkedNode(1);
  head.next = new LinkedNode(2);
  head.next.next = new LinkedNode(3);
  head.next.next.next = new LinkedNode(4);
  head.next.next.next.next = new LinkedNode(2);
  head.next.next.next.next.next = new LinkedNode(1);
  if (!isPalindrome3(head)) {
    succeed = false;
  }
  printLinkedList(head);

  console.log("------".concat(succeed ? "Nice!" : "No", "-----"));
}
main();
