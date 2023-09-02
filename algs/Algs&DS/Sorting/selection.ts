import { swap } from "./bubble.js";

const arr1 = [29, 12, 10, 14, 30, 37, 18];
const arr2 = [5, 3, 4, 1, 2];

const selection = (arr: number[]): number[] => {
  let minIdx: number;
  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      swap(arr, minIdx, i);
    }
  }
  return arr;
};

console.log(selection(arr1));
console.log(selection(arr2));
