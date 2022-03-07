// eslint-disable-line
function minCoins1(arr, aim) {
  if (arr == null || arr.length < 1 || aim < 0) {
    return -1;
  }

  return process(arr, 0, aim);
}

function process(arr, i, rest) {
  if (i === arr.length) {
    return rest === 0 ? 0 : -1;
  }

  let res = -1;

  for (let k = 0; k * arr[i] <= res; k++) {
    let next = process(arr, i + 1, res - k * arr[i]);

    if (next != -1) {
      res = res === -1 ? next + k : Math.min(res, next + k);
    }
  }

  return res;
}

function minCoins2(arr, aim) {
  if (arr === null || arr.length < 1 || aim < 0) {
    return -1;
  }

  let N = arr.length;
  let dp = new Array(N + 1);
  for (let i = 0; i < dp.length; i++) {
    dp = new Array(aim + 1);
  }

  dp[N][0] = 0;

  for (let col = 1; col <= aim; col++) {
    dp[N][col] = -1;
  }

  for (let i = N - 1; i >= 0; i--) {
    for (let rest = 0; rest <= aim; rest++) {
      dp[i][rest] = -1;
      if (dp[i + 1][rest] != -1) {
        dp[i][rest] = dp[i + 1][rest];
      }
      if (rest - arr[i] >= 0 && dp[i][rest - arr[i]] != -1) {
        if (dp[i][rest] === -1) {
          dp[i][rest] = dp[i][rest - arr[i]] + 1;
        } else {
          dp[i][rest] = Math.min(dp[i][rest], dp[i][rest - arr[i]] + 1);
        }
      }
    }
  }

  return dp[0][aim];
}
