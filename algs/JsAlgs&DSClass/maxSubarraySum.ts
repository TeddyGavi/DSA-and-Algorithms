/**
 * @description  accepts an array on integers and a number n, the function should calculate the maximum sum of n consecutive elements in the array
 * @param {number[]} arr array in integers
 * @param {number} n  the number of consecutive digits
 * @returns {number} the max sum that can be created by forming a subarray of size n
 */
const maxSubarraySum = (arr: number[], n: number): number => {
  let maxSum = 0;
  let tempSum = 0;

  // create temp max
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([], 4)); //null;)
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39 )
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //  5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
