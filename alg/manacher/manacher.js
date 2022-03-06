// manacher

function manacher(str) {
  if (str === null) {
    return null;
  }

  let arr = new Array(str.length * 2);

  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (i & 1) === 0 ? "#" : str[index++];
  }
  return arr;
}

function getLcpsLength(str) {
  if (str === null || str.length < 1) {
    return 0;
  }

  let arr = manacher(str);

  let pArr = new Array(arr.length);

  let R = -1;
  let C = -1;

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    pArr[i] = R > i ? Math.min(pArr[2 * C - i], R - i) : 1;

    while (i + pArr[i] < arr.length && i - pArr[i] > -1) {
      if (arr[i + pArr[i]] === arr[i - pArr[i]]) {
        pArr[i]++;
      } else {
        break;
      }
    }

    if (i + pArr[i] > R) {
      R = i + pArr[i];
      C = i;
    }
    max = Math.max(max, pArr[i]);
  }

  return max - 1;
}

function test() {
  let arr = "abc123321caa";
  console.log(getLcpsLength(arr));
}

test();
