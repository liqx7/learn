// let t = readInt();
// for (let i = 0; i < t; i++) {
//   let [n, x, y] = read_line()
//     .split(" ")
//     .map((v) => Number(v));
//   let m = {};
//   for (let i = 0; i < n; i++) {
//     let a = read_line().split(" ");
//     a.forEach((v, i) => {
//       if (i > 0) {
//         if (v in m) {
//           m[v]++;
//         } else {
//           m[v] = 1;
//         }
//       }
//     });
//   }
//   console.log(pro(m, x, y));
// }


function pro(m, x, y) {
  let arr = Object.keys(m);
  for (let j = 0; j < y; j++) {
    if (arr.filter((v) => m[v] > 0).length === 0) {
      break;
    }
    let maxK = arr.reduce((prev, cur) => (m[prev] > m[cur] ? prev : cur), 0);
    if (m[maxK] > 0) {
      m[maxK] -= x;
    } else {
      break;
    }
  }

  if (arr.filter((v) => m[v] > 0).length === 0) {
    return "YES";
  }
  return "NO";
}


function com(arr,x,y){
  let s=new Set(arr.flat())
  s.

}

function main() {
  let testTimes = 50;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let n = parseInt(Math.random() * maxValue);
    let x = parseInt(Math.random() * maxValue);
    let y = parseInt(Math.random() * maxValue);
    let arr = [];
    for (let i = 0; i < n; i++) {
      let num = parseInt(Math.random() * maxValue);
      let s = [];
      while (num > 0) {
        s.push(parseInt(Math.random() * maxValue));
        num--;
      }
      arr.push(s);
    }

    let m = {};
    for (let i = 0; i < arr.length; i++) {
      arr[i].forEach((v, i) => {
        if (v in m) {
          m[v]++;
        } else {
          m[v] = 1;
        }
      });
    }

    console.log(pro(m, x, y));
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
