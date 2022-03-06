class Node {
  constructor(value, left, right) {
    this.value = value === undefined ? null : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

module.exports = Node;
