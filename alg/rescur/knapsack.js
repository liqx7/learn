// 背包问题

function pack(weights, values, bag) {
  if (weights === null || values === null || bag === null) {
    return;
  }

  return process(weights, values, 0, bag);
}

function process(weights, values, i, rest) {
  if (i === weights.length || rest <= 0) {
    return 0;
  }

  if (weights[i] < rest) {
    return Math.max(
      values[i] + process(weights, values, i + 1, rest - weights[i]),
      process(weights, values, i + 1, rest)
    );
  }
  return process(weights, values, i + 1, rest);
}

function test() {
  let weights = [3, 2, 4, 7];
  let values = [5, 6, 3, 19];
  let bag = 11;
  console.log(pack(weights, values, bag));
}

test();
