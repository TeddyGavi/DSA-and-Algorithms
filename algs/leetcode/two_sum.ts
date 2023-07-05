/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums: number[], target: number): number[] {
  // const result = []

  // for (let i = 0; i < nums.length; i ++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             // result.push(i, j)
  //             return [i, j]
  //         }
  //     }
  // }
  // return result;

  // const map = new Map(nums.map((x, i )=>[x, i]))
  /*   const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) !== undefined) {
      return [map.get(target - nums[i]), i];
    }
    // console.log(map.get(target - nums[i]), map, nums[i] - target)
    map.set(nums[i], i);
  }
  return []; */

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log(target - nums[i]);
    let res = target - nums[i];

    if (map.has(res)) {
      return [map.get(res), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
