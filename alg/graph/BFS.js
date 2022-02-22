// 宽度优先遍历

function bfs(node) {
  if (node === null) {
    return;
  }

  let queue = [];
  let nodeSet = new Set();

  queue.push(node);
  nodeSet.add(node);

  while (queue.length > 0) {
    let cur = queue.shift();

    console.log(cur.value);

    for (let v of cur.nexts) {
      if (!nodeSet.has(v)) {
        queue.push(v);
        nodeSet.add(v);
      }
    }
  }
}
