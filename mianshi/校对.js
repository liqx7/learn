function corr(str) {
  let n3 = 1;

  let fn2 = 1;
  let sn2 = 0;

  let arr = str.split("");
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.length === 0) {
      res.push(arr[i]);
    } else {
      let top = res.pop();
      if (top !== arr[i]) {
        res.push(top, arr[i]);
      } else {
        if (res.length === 0) {
          res.push(top, arr[i]);
        } else {
          let second = res.pop();
          if (second === top) {
            // 三个相等抛弃
            res.push(second, top);
          } else {
            // 前三个不相等
            if (res.length === 0) {
              res.push(second, top, arr[i]);
            } else {
              let third = res.pop();
              if (third === second) {
                // AAB了 抛弃
                res.push(third, second, top);
              } else {
                res.push(third, second, top, arr[i]);
              }
            }
          }
        }
      }
    }
  }

  return res.join("");
}

function test() {
  let s = ["aaa", "aabb", "aabbcc", "aaabccddd"];
  s.forEach((v) => {
    console.log("-----", v, "--->", corr(v));
  });
}

test();
