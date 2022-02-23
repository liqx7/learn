// 地接特斯拉算法

function Dijkstra(graph, startNode) {
  let nodes = graph.nodes.values();
  let distanceMap = new Map(graph);
  let selectedNodes = new Set();

  distanceMap.set(startNode, 0);

  // 已经更新的点中选最小的距离的node走下一步

  let minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes);

  let distance = distanceMap.get(minNode);
  for (let edge of minNode.edges) {
    let toNode = edge.to;
    if (!distanceMap.has(toNode)) {
      distanceMap.set(toNode, edge.weight + distance);
    } else {
      distanceMap.set(
        edge.to,
        Math.min(edge.weight + distance, distanceMap.get(toNode))
      );
    }
    selectedNodes.add(toNode); // 由他出发更新过边了
    minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes);
  }

  return distanceMap;
}

function getMinDistanceAndUnselectedNode(distanceMap, touchedNodes) {
  let minNode = null;
  let minDistance = Number.MAX_VALUE;

  // 更新过的点
  for (let node in distanceMap) {
    let distance = distanceMap.get(node);
    // 没有操作过的点中找distance最小的点，循环完没有，就是null
    if (!touchedNodes.has(node) && distance < minDistance) {
      minDistance = distance;
      minNode = node;
    }
  }

  return node;
}
