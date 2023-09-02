const arr1 = [2, 14, 99, 100, 1, 10, 50];

const arr3 = [102, 10, 15, 17, 1, 2, 4, 6, 9];

const swap = (arr: Array<any>, idx1: number, idx2: number): Array<any> => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;

  return arr;
};

const pivotHelper = (arr: number[], start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let idx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      idx++;
      swap(arr, i, idx);
    }
  }
  swap(arr, start, idx);

  return idx;
};

const quick = (arr: number[], left = 0, right = arr.length - 1): number[] => {
  if (left < right) {
    let pivot = pivotHelper(arr, left, right);
    // left
    quick(arr, left, pivot - 1);
    // right
    quick(arr, pivot + 1, right);
  }

  return arr;
};

// console.log(pivotHelper(arr1, 3));
// console.log(pivotHelper(arr3));
console.log(quick(arr1));
