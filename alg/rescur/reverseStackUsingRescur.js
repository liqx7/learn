const { genRandomArr } = require("../utils");
// 用递归逆序栈
function reverseStack(stack) {
  if (stack === null || stack.length === 0) {
    return;
  }

  process(stack);
}

function f(stack) {
  // 这样一个过程
  // 取出栈底元素，栈往下掉，返回栈底元素
  if (stack.length === 1) {
    return stack.pop();
  }

  let a = stack.pop();
  // 减少一个高度的stack,毕竟basecase
  let res = f(stack);
  stack.push(a);
  return res;
}

function process(stack) {
  if (stack.length <= 1) {
    return;
  }

  // 取出栈底元素
  let d = f(stack);
  // 剩下的栈逆序
  process(stack);
  // 压回去
  stack.push(d);
}

function main() {
  let testTimes = 5;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = genRandomArr(maxSize, maxValue);
    console.log(`------arr------`);
    console.log(arr);
    reverseStack(arr);
    console.log(`------revese------`);
    console.log(arr);
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
