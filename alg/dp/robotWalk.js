//
function robotWalk(n, k, s, e) {
  // 参数无效
  if (n < 1 || k < 0 || s < 1 || s > n || e < 1 || e > n) {
    return 0;
  }

  return process(n, s, k, e);
}

function process(N, cur, rest, P) {
  if (rest === 0) {
    return cur === P ? 1 : 0;
  }

  if (cur === 1) {
    return process(N, 2, rest - 1, P);
  }

  if (cur === N) {
    return process(N, N - 1, rest - 1, P);
  }

  return process(N, cur + 1, rest - 1, P) + process(N, cur - 1, rest - 1, P);
}

function ways2(n, k, s, e) {
  if (n < 1 || k < 0 || s > n || s < 1 || e > n || e < 1) {
    return 0;
  }

  let dp = new Array(k);
  for (let i = 0; i <= k; i++) {
    dp[i] = new Array(n);
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = j === s ? 1 : 0;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === 1) {
        dp[i][j] = dp[i - 1][2];
      } else if (j === n) {
        dp[i][j] = dp[i - 1][n - 1];
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
      }
    }
  }
  return dp[k][e];
}

function ways3(n, k, s, e) {
  if (n < 1 || k < 0 || s < 1 || s > n || e < 1 || e > n) {
    return 0;
  }
}

function test() {
  console.log(`------process(7,4,9,5------`);
  console.log(robotWalk(1, 0, 1, 1));
  console.log(ways2(1, 0, 1, 1));
}

test();
