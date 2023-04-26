const arr1 = [2, 14, 99, 100, 1, 10, 50];
const arr2 = [];

const arr3 = [1, 2, 4, 6, 9];
const arr4 = [10, 15, 17];

const swap = (arr: Array<any>, idx1: number, idx2: number): Array<any> => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;

  return arr;
};

const pivotHelper = (arr: number[], start = 0, end = arr.length) => {
  let pivot = arr[start];
  let idx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      idx++;
      swap(arr, i, idx);
    }
  }
  swap(arr, start, idx);

  console.log(arr);
  return idx;
};

const quick = () => {};

console.log(pivotHelper(arr1, 3));
