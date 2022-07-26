function pro(arr) {
  let dp = new Array(arr.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2);
  }
  dp[arr.length] = [0, 0];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= "A" && arr[i] <= "Z") {
      // 0是小写
      dp[i][0] = Math.min(2 + dp[i + 1][0], 2 + dp[i + 1][1]);
      dp[i][1] = Math.min(1 + dp[i + 1][1], 2 + dp[i + 1][0]);
    } else {
      dp[i][0] = Math.min(1 + dp[i + 1][0], 2 + dp[i + 1][1]);
      dp[i][1] = Math.min(2 + dp[i + 1][0], 2 + dp[i + 1][1]);
    }
  }
  return dp[0][0];
}

console.log(pro("AAAAAAA".split("")));

function test(arr, i, type) {
  if (i === arr.length) {
    return 0;
  }
  if (
    (arr[i] >= "a" && arr[i] <= "z" && type) ||
    (arr[i] >= "A" && arr[i] <= "Z" && !type)
  ) {
    return Math.min(1 + test(arr, i + 1, type), 2 + test(arr, i + 1, !type));
  } else {
    return Math.min(2 + test(arr, i + 1, type), 2 + test(arr, i + 1, !type));
  }
}

function main() {
  let testTimes = 50;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = [];
    let n = parseInt(Math.random() * 20);
    while (n >= 0) {
      if (Math.random() > 0.5) {
        arr.push(
          String.fromCharCode("a".charCodeAt() + parseInt(Math.random() * 26))
        );
      } else {
        arr.push(
          String.fromCharCode("A".charCodeAt() + parseInt(Math.random() * 26))
        );
      }
      n--;
    }

    if (pro(arr) !== test(arr, 0, true)) {
      succeed = false;
      console.log("-----", arr, pro(arr), test(arr, 0, true));
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);

  console.log(`------------`);
  console.log(pro("AaAa"));
}

main();
