//  p算法生成最小生成树，从点的角度

function p(graph) {
  let nodeSet = new Set();

  let node = graph.values()[0];
  // 第一个点进入

  // 构造小根堆
  let h = new Heap((a, b) => a.value > b.value);

  while (nodeSet.length !== graph.nodes.length) {
    //加一个点
    nodeSet.add(node);
    // 点的边加入堆
    for (let v of node.edges) {
      h.add(v);
    }
    // 取出最小的边
    let minEdge = null;
    while (!h.isEmpty()) {
      minEdge = h.poll();
      if (!nodeSet.has(minEdge.to)) {
        node = minEdge.to;
        break;
      }
    }
  }
}
