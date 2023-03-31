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
  let result = 0;
  let hold = sortedArr[0];
  let compare = 0;
  // could do this with a Set, and check the length, i will try to do it with pointers first
  for (let i = 0; i < sortedArr.length; i++) {
    if (hold !== sortedArr[i]) {
      result++;
      hold = sortedArr[i];
    }
  }

  return result;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
