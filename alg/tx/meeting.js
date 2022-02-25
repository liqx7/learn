// 会议安排
class Program {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const programComparator = (p1, p2) => {
  return p1.end - p2.end;
};

const bestArray = (pArr, start) => {
  pArr.sort(programComparator);

  let result = 0;
  for (let i = 0; i < pArr.length; i++) {
    if (start <= pArr[i].start) {
      result++;
      start = pArr[i].end;
    }
  }
  return result;
};

const comparator = (pArr, start) => {
  let len = pArr.length;

  for (let i = 0; i < pArr.length; i++) {
    pArr[i];
  }
};

function prograss(pArr, start) {
  let maxNum = 0;
  let arr1 = [...pArr];
  // 每一个符和开头的数做一次排列
  for (let i = 0; i < arr1.length; i++) {
    if (start <= arr1[i].start) {
      // 以这个数做开头
      let newStart = arr1[i].end;
      // pArr.splice(i,1)
      let arr2 = [...arr1];
      arr2.splice(i, 1);
      maxNum = Math.max(maxNum, 1 + prograss(arr2, newStart));
    }
  }

  return maxNum;
}

function generateArr(maxSize, maxValue) {
  let size = generateNumber(maxSize);
  let arr = [];
  for (let i = 0; i < arr.length; i++) {
    let r1 = generateNumber(maxValue);
    let r2 = generateNumber(maxValue);

    if (r1 < r2) {
      arr.push(new Program(r1, r2));
    }
    if (r1 > r2) {
      arr.push(new Program(r2, r1));
    }
  }
  return arr;
}

function generateNumber(maxValue) {
  return parseInt(Math.random() * (maxValue + 1));
}

function test() {
  let p1 = new Program(1, 2);
  let p2 = new Program(2, 3);
  let p3 = new Program(2, 4);
  let p4 = new Program(1, 4);

  let arr = [p1, p2, p3, p4];
  let start = 1;

  let res = prograss(arr, start);
  console.log(`------res------`);
  console.log(res);

  let res1 = bestArray(arr, start);
  console.log(`------res1------`);
  console.log(res1);
}

// test();

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateArr(maxSize, maxValue);
    let arr2 = [...arr1];
    let start = generateNumber(maxValue);
    let res1 = bestArray(arr1, start);
    let res2 = prograss(arr2, start);

    if (res1 !== res2) {
      succeed = false;
      console.log(`------arr1------`);
      console.log(arr1, res1, res2);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
