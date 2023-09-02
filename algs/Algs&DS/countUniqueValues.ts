/*
 write a function called countUniqueValues, which accepts a sorted array, and counts the unique values n the array. There can be negative numbers but it will always be sorted.

countUniqueValues = [1, 1, 1, 1, 1, 1, 1, 2]; // 2
countUniqueValues = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
countUniqueValues = []; // 0
countUniqueValues = [-2, -1, -1, 0, 1]; // 4
*/

/**
 * @description accepts a sorted array, and counts the unique values n the array.
 * @param {number[]} sortedArr sorted array of integers
 * @returns {number} The count of unique values
 */
const countUniqueValues = (sortedArr: number[]): number => {
  // could do this with a Set, and check the length, i will try to do it with pointers
  /* const set = new Set(sortedArr);
  return set.size; */

  /* if (sortedArr.length === 0) return 0;
  let result = 0;
  let hold: number;
  for (let i = 0; i < sortedArr.length; i++) {
    if (hold !== sortedArr[i]) {
      result++;
      hold = sortedArr[i];
    }
  }

  return result; */

  // without another variable and two pointers
  if (sortedArr.length === 0) return 0;

  let j = 0;

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[j] !== sortedArr[i]) {
      j++;
      sortedArr[j] = sortedArr[i];
    }
  }

  return j + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
