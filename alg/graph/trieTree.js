// 前缀树
class TrieNode {
  constructor() {
    this.path = 0;
    this.end = 0;
    this.nexts = new Array(26); // 存放下一个节点，代表是哪个字母的路
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    if (word === null) {
      return;
    }
    let node = this.root; // 遍历指针
    let index = 0; // 用于对应路径
    for (let i = 0; i < word.length; i++) {
      index = word[i].charCodeAt() - "a".charCodeAt();

      // 如果这个字符有路径了
      if (node.nexts[index]) {
      } else {
        node.nexts[index] = new TrieNode();
      }
      node = node.nexts[index]; //移到下一个

      node.path++;
    }
    // 循环完停留的节点end++
    node.end++;
  }

  delete(word) {
    if (word === null) {
      return;
    }

    // 先search一下,再沿途删除
    if (search(word) != 0) {
      let node = this.root;
      let index = 0;

      for (let i = 0; i < word.length; i++) {
        index = word[i].charCodeAt() - "a".charCodeAt();

        if (--node.nexts[index].path === 0) {
          // 发现某个下级节点的path变为0了，后面就是没有了，直接把这个下级节点标空，后面所有的东西内厝都释放了，c++需要沿途去释放
          node.nexts[index] = null;
          return;
        }

        node = node.nexts[index];
      }
      node.end--;
    }
  }

  search(word) {
    if (word === null) {
      return;
    }

    let node = this.root;
    let index = 0;

    for (let i = 0; i < word.length; i++) {
      index = word[i].charCodeAt() - "a".charCodeAt();

      if (!node.nexts[index]) {
        return 0;
      }

      node = node.nexts[index];
    }
    return node.end;
  }

  prefixNumber(word) {
    let node = this.root;
    let index = 0;

    for (let i = 0; i < word.length; i++) {
      index = word[i].charCodeAt() - "a".charCodeAt();

      if (!node.nexts[index]) {
        return 0;
      }
      node = node.nexts[index];
    }
    return node.path;
  }
}

function test() {
  let trie = new Trie();
  console.log(trie.search("zuo"));
  trie.insert("zuo");
  console.log(trie.search("zuo"));
  trie.delete("zuo");
  console.log(trie.search("zuo"));
  trie.insert("zuo");
  trie.insert("zuo");
  trie.delete("zuo");
  console.log(trie.search("zuo"));
  trie.delete("zuo");
  console.log(trie.search("zuo"));
  trie.insert("zuoa");
  trie.insert("zuoac");
  trie.insert("zuoab");
  trie.insert("zuoad");
  trie.delete("zuoa");
  console.log(trie.search("zuoa"));
  console.log(trie.prefixNumber("zuo"));
}

test();
