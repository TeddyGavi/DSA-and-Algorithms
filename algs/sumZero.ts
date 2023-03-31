/* 
sumZero([-3, -2, -1, 0, 2, 3]); // [-3,3]
sumZero([-3, -2, -1, 0, 1, 8, 9]) //
sumZero([-3, 3, 4, 5]) // [-3, 3]
sumZero([-2, 0, 1, 3]); //undefined
sumZero([1, 2, 3]); // undefined
 */

/**
 * @description a function accepts a sorted array of integers. The function should find the first pair were the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
 * @param {number[]} sortedArr An array of sorted numbers
 * @returns {[number, number] | undefined} The first pair of numbers that add up to zero
 */
const sumZero = (sortedArr: number[]): [number, number] | undefined => {
  let low = 0;
  let high = sortedArr.length - 1;

  for (let i = 0; i < sortedArr.length; i++) {
    let sum = sortedArr[low] + sortedArr[high];
    if (low === high) {
      return undefined;
    } else if (sum === 0) {
      return [sortedArr[low], sortedArr[high]];
    } else if (sum > 0) {
      high -= 1;
    } else if (sum < 0) {
      low += 1;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 2, 3])); // [-3,3]
console.log(sumZero([-3, -2, -1, 0, 1, 8, 9])); // [-1, 1]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5, 8])); //[-2, 2]
console.log(sumZero([-3, 3, 4, 5])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); //undefined
console.log(sumZero([1, 2, 3])); // undefined
