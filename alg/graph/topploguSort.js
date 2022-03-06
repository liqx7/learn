// 拓扑排序

function topologySort(graph) {
  // 每次取入度最小的点
  let inMap = new Map();
  let zeroInQueue = [];

  for (node of graph.nodes.values()) {
    inMap.set(node, node.ins);
    if (node.ins == 0) {
      zeroInQueue.push(node);
    }
  }

  let res = [];

  while (zeroInQueue.length > 0) {
    let node = zeroInQueue.shift();
    res.push(node);
    for (let v of node.nexts) {
      inMap.set(v, inMap(v) - 1);
      if (inMap.get(v) === 0) {
        zeroInQueue.push(v);
      }
    }
  }

  return res;
}
