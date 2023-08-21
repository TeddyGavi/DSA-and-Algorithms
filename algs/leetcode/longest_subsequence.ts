/**
 * @abstract given a number array, find the longest uninterrupted sequence
 * @description First sorted and filter duplicates from array, then using two pointers keep track of the longest sequence and the max sequence. Once a break is detected (else block) we have to jump the pointer up to the current position in the array and start counting the sequence over again
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums: number[]): number | void  => {
  if (nums.length === 0) return 0
  const sorted = nums.sort((a, b) => a-b).filter((x, i) => nums.indexOf(x) === i)
  let count = 0
  let max = 0;
  let j = 0;

for (let i = 1; i < sorted.length; i ++) {
      console.log(i, j, sorted)
      if ((sorted[j] + 1) === sorted[i]) {
          j++;
          count++;
      } else {
          count = 0
          j = i;
          console.log(i, j)
      }
      max = Math.max(count, max)

  }
  return max + 1;
};


console.log(longestConsecutive([100,4,200,1,3,2])) // 4