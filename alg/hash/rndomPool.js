// 随机池子

class Pool {
  constructor() {
    this.size = 0;
    this.keyIndexMap = new Map();
    this.indexKeyMap = new Map();
  }

  insert(key) {
    if (this.keyIndexMap.has(key)) {
      return;
    }
    this.keyIndexMap.set(key, this.size);
    this.indexKeyMap.set(this.size++, key);
  }

  delete(key) {
    if (!this.keyIndexMap.has(key)) {
      return;
    }
    let index = this.keyIndexMap.get(key);
    this.keyIndexMap.delete(key);
    let lastKey = this.indexKeyMap.get(this.size - 1);
    this.indexKeyMap.set(index, lastKey);
    this.indexKeyMap.delete(this.size--);
  }

  getRandom() {
    let randomIndex = Math.floor(Math.random() * this.size);
    return this.indexKeyMap.get(randomIndex);
  }
}

function test() {
  let p = new Pool();
  p.insert(1);
  p.insert(2);

  p.insert(1);
  p.insert(2);
  p.insert(3);
  p.insert(4);
  console.log(`------p.size------`);
  console.log(p.size);
  p.delete(1);
  console.log(`------p.size------`);
  console.log(p.size);
  let testTimes = 10;
  for (let i = 0; i < testTimes; i++) {
    console.log(p.getRandom());
  }
}

test();
