/* Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false

*/

const averagePair = (sortedArr: number[], target: number): boolean => {
  let low = 0;
  let high = sortedArr.length - 1;
  const length = sortedArr.length;

  if (!length) return false;

  for (let i = 0; i < sortedArr.length; i++) {
    const average = (sortedArr[low] + sortedArr[high]) / 2;
    if (low === high) {
      return false;
    } else if (average === target) {
      return true;
    } else if (average > target) {
      high -= 1;
    } else if (average < target) {
      low += 1;
    }
  }
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
