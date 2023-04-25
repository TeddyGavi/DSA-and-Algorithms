const arr1 = [1, 10, 50];
const arr2 = [2, 14, 99, 100];

const arr3 = [1, 2, 4, 6, 9];
const arr4 = [10, 15, 17];

const merge = (arr1: number[], arr2: number[]): number[] => {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // could leave these out if you use an || in the first while loop
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

// console.log(merge(arr1, arr2));
// console.log(merge(arr3, arr4));
// console.log(merge([], arr2));

const mergeSort = (arr: number[]): number[] => {
  const half = Math.floor(arr.length / 2);
  const oneHalf = arr.slice(0, half);
  const otherHalf = arr.slice(half);
  if (arr.length <= 1) {
    return arr;
  } else {
    return merge(mergeSort(oneHalf), mergeSort(otherHalf));
  }
};

console.log(mergeSort([89, 8, 12, 4, 32, 9, 78, 4, 6]));
console.log(mergeSort([79, 100, 10000, 1, 1, 1, 1, 11, 14, 157, 18, 78, 4, 6]));
console.log(mergeSort([79, 100, 10000, 1]));
