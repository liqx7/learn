// 字符串拼接最小字典序

function LowestLexicography(arr) {
  arr.sort(strCompare);

  return arr.join("");
}

function strCompare(s1, s2) {
  return lexCompare(s1 + s2, s2 + s1);
}

function lexCompare(s1, s2) {
  let i = 0;
  while (i < s1.length && i < s2.length) {
    if (s1[i].charCodeAt() > s2[i].charCodeAt()) {
      return true;
    }
    if (s1[i].charCodeAt() > s2[i].charCodeAt()) {
      return false;
    }

    i++;
  }
  if (i === s1.length) {
    return false;
  }
  return true;
}

function progress(arr) {
  if (arr == null) {
    return;
  }
  if (arr.length < 2) {
    return arr[0] || "";
  }
  let strArr = [];

  for (let i = 0; i < arr.length; i++) {
    let arr1 = [...arr];
    arr1.splice(i, 1);

    // 以第i个为首位的所有拼接字符串
    strArr.push(arr[i] + progress(arr1));
  }

  strArr.sort(lexCompare);
  return strArr[0];
}

function generateArr(maxSize, maxCharSize) {
  let arr = new Array(parseInt(maxSize * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = generateStr(maxCharSize);
  }
  return arr;
}

function generateStr(maxSize) {
  let len = parseInt(Math.random() * maxSize) + 1;
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr[i] = generateChar();
  }
  return arr.join("");
}

function generateChar() {
  let length = "z".charCodeAt() - "a".charCodeAt();
  let code = "a".charCodeAt() + parseInt(Math.random() * (length + 1));
  return String.fromCharCode(code);
}

function main() {
  let testTimes = 500;
  let maxSize = 10;
  let maxValue = 10;
  let maxCharSize = 5;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr = generateArr(maxSize, maxCharSize);
    let arr1 = [...arr];

    let res1 = LowestLexicography(arr);
    let res2 = progress(arr1);

    if (res1 !== res2) {
      succeed = false;
      console.log(`------arr,res1,res2------`);
      console.log(arr, res1, res2);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
