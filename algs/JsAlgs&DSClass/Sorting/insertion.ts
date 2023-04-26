const arr1 = [29, 12, 10, 14, 30, 37, 18];
const arr2 = [5, 3, 4, 1, 2];

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const insertion = (arr: any[]): any[] => {
  let current: number;
  for (let i = 1; i < arr.length; i++) {
    // pick the first element
    current = arr[i];
    // must start looping on sorted portion
    let j = i - 1;
    for (j; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
    console.log(arr);
  }

  return arr;
};

console.log(insertion(arr2));
