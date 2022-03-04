// 小岛问题
function countIsLand(arr) {
  if (arr == null || arr[0] == null) {
    return 0;
  }

  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let num = arr[i][j];
      if (num === 1) {
        // 发现一座小岛
        res++;
        // 感染争做小岛
        infect(arr, i, j);
      }
    }
  }
  return res;
}

function infect(arr, i, j) {
  if (arr[i] === null || arr[i][j] === null || arr[i][j] !== 1) {
    return;
  }
  // 越界
  if (i >= arr.length || j >= arr[i].length) {
    return;
  }
  //感染该点
  arr[i][j] = 2;
  //  上下左右四个位置继续infect
  infect(arr, i + 1, j);
  infect(arr, i - 1, j);
  infect(arr, i, j + 1);
  infect(arr, i, j - 1);
}

function test() {
  let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  console.log(countIsLand(arr));
}

test();
