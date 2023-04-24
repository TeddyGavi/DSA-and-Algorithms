const arr1 = [1, 10, 50];
const arr2 = [2, 14, 99, 100];

const merge = (arr1: number[], arr2: number[]): number[] => {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  return results;
};

console.log(merge(arr1, arr2));
