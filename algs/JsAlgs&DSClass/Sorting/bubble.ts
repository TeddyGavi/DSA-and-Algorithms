const arr1 = [29, 12, 10, 14, 30, 37, 18];
const arr2 = [5, 3, 4, 1, 2];

const swap = (arr: Array<any>, idx1: number, idx2: number): Array<any> => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;

  return arr;
};

const bubblin = (arr: Array<any>) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
    // console.log(arr);
  }
  return arr;
};

console.log(bubblin(arr1));
console.log(bubblin(arr2));
