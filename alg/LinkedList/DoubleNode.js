class DoubleNode {
  constructor(val, next, last) {
    this.value = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
    this.last = last === undefined ? null : last;
  }
}

module.exports = DoubleNode;
