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

console.log(merge(arr1, arr2));
console.log(merge(arr3, arr4));
console.log(merge([], arr2));
