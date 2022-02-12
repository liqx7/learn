const {
  swap,
  generateRandomArray,
  copyArray,
  isEqualArray,
} = require("../../utils");

// 快排3
function quickSort3(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }

  quickSortRecurse(arr, 0, arr.length - 1);
}

function quickSortRecurse(arr, l, r) {
  if (l >= r) {
    return;
  }

  let p = parseInt((r - l + 1) * Math.random());
  let randomIndex = l + p;

  swap(arr, r, randomIndex);

  let [less, more] = partition(arr, l, r - 1, arr[r]);
  swap(arr, r, more++);

  quickSortRecurse(arr, l, less);
  quickSortRecurse(arr, more, r);
}

function partition(arr, l, r, num) {
  if (l > r) {
    return;
  }

  let less = l - 1;
  let more = r + 1;

  while (l < more) {
    if (arr[l] < num) {
      swap(arr, l++, ++less);
    } else if (arr[l] > num) {
      swap(arr, l, --more);
    } else {
      l++;
    }
  }

  return [less, more];
}

function comparator(arr) {
  arr.sort((a, b) => a - b);
}

function main() {
  let testTimes = 500000;
  let maxSize = 10;
  let maxValue = 10;
  let succeed = true;

  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);

    quickSort3(arr1);
    comparator(arr2);

    if (!isEqualArray(arr1, arr2)) {
      succeed = false;
      console.log(`------arr1,arr2------`);
      console.log(arr1, arr2);
    }
  }

  console.log(`------${succeed ? "Nice!" : "No"}-----`);
}

main();
