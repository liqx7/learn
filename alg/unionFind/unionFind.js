// 并查集

class Ele {
  constructor(val) {
    this.val = val === undefined ? null : val;
    this.p = this;
    this.size = 1;
  }
}

class UnionFind {
  constructor(arr) {
    this.eleMap = new Map();
    for (let i = 0; i < arr.length; i++) {
      this.eleMap.set(arr[i], new Ele(arr[i]));
    }
  }

  isSameSet(a, b) {
    let h1 = this.findHead(a);
    let h2 = this.findHead(b);
    return h1 === h2;
  }

  union(a, b) {
    let h1 = this.findHead(a);
    let h2 = this.findHead(b);
    if (h1 !== null && h2 !== null) {
      let bigH = h1.size > h2.size ? h1 : h2;
      let smallH = bigH === h1 ? h2 : h1;
      smallH.p = bigH;
      bigH.size += smallH.size;
    }
  }

  findHead(a) {
    // 要把路径上所有点都记下来，挂到头上
    let e = this.eleMap.get(a);
    let temp = [];

    while (e.p !== e) {
      temp.push(e);
      e = e.p;
    }

    while (temp.length > 0) {
      temp.pop().p = e;
    }

    return e;
  }
}

function test() {
  let arr = [[1], [2], [3], [4], [5]];
  let uf = new UnionFind(arr);

  console.log(`------isSame------`);
  console.log(uf.isSameSet(arr[0], arr[1]));
  uf.union(arr[0], arr[1]);
  console.log(`------isSame------`);
  console.log(uf.isSameSet(arr[0], arr[1]));
  uf.union(arr[0], arr[2]);
  console.log(`------isSame------`);
  console.log(uf.isSameSet(arr[1], arr[2]));
}

test();
