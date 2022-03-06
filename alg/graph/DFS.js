// 深度

function dfs(node) {
  if (node === null) {
    return;
  }

  let stack = [];
  let nodeSet = new Set();

  stack.push(node);
  nodeSet.add(node);
  // 深度优先遍历是加入的时候做处理
  console.log(`------cur.value------`);
  console.log(node);

  while (stack.length > 0) {
    let cur = stack.pop();

    for (let v of cur.nexts) {
      if (!nodeSet.has(v)) {
        stack.push(cur);
        stack.push(v);
        console.log(`------v------`);
        console.log(v);
        nodeSet.add(v);
        break;
      }
    }
  }
}
