// manacher

function manacher(str) {
  let arr = str.split("");

  let res = new Array(arr.lrength * 2);
  let index = 0;
  for (let i = 0; i < res.length; i++) {
    res[i] = (i & 1) === 0 ? "#" : arr[index++];
  }
}

function maxLcpsLength(str) {
  if (str == null || str.length === 0) {
    return 0;
  }

  let arr = manacher(str);

  let pArr = new Array(arr.length);

  let C = -1;
  let R = -1;

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    // 在内
    pArr[i] = R > i ? Math.min(pArr[2 * C - i], R - i) : 1; // 至少的半径，向两边扩

    while (i + pArr[i] < arr.length && i - pArr[i] > -1) {
      if (arr[i + pArr[i]] === arr[i - pArr[i]]) {
        pArr[i]++;
      } else {
        break;
      }
    }

    if (i + pArr[i] > R) {
      R = i + pArr[i];
      c = i;
    }

    max = Math.max(max, pArr[i]);
  }
  return max - 1;
}
