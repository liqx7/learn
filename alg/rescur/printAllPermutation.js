// 全排列
function printAllPermutations(str) {
  let res = [];
  if (str == null || str.length === 0) {
    return res;
  }
  let arr = str.split("");
  p(arr, 0, res);
  return res;
}

function p(arr, i, res) {
  // 走到结尾了，加入res
  if (i === arr.length) {
    res.push(arr.join(""));
  }

  for (let j = i; j < arr.length; j++) {}
}
