// 图的数据结构

class Graph {
  constructor() {
    this.nodes = new Map(); // 点的数组 hashMap,(编号，node)
    this.edges = new Set(); // 边的数组 Set
  }
}

class Node {
  constructor(value) {
    // 编号
    this.value = value === undefined ? null : value;
    this.ins = 0;
    this.outs = 0;
    this.nexts = []; // 紧连的node数组
    this.edges = []; // 此点的边的数组,发出的边
  }
}

class Edge {
  constructor(weight, from, to) {
    this.weight = weight === undefined ? null : weight;
    this.from = from === undefined ? null : from;
    this.to = to === undefined ? null : to;
  }
}

function createGraph(arr) {
  // e二维数组的转化
  // [[5,0,1]] // 5权值，从0到1
  let graph = new Graph();
  for (let i = 0; i < arr.length; i++) {
    let weight = arr[i][0];
    let from = arr[i][1];
    let to = arr[i][2];

    // 每一条边更新graph
    // 加点
    if (!graph.nodes.has(from)) {
      graph.nodes.set(from, new Node(from));
    }
    if (!graph.nodes.has(to)) {
      graph.nodex.set(to, new Node(to));
    }

    // 点可能已有，边都是新的
    let fromNode = graph.nodes.get(from);
    let toNode = graph.nodex.get(to);
    let newEdge = new Edge(weight, fromNode, toNode);

    fromNode.outs++;
    fromNode.nexts.push(toNode);
    toNode.ins++;
    fromNode.edges.push(newEdge);
    graph.edges.set(newEdge);
  }
}

module.exports = {
  Graph,
  Node,
  Edge,
};
