class Node {
  constructor(val, next) {
    this.value = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

module.exports = Node;
