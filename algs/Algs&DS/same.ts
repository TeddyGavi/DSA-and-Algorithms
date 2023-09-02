/* 

 Write a function called same, which accepts two arrays, the function should return true if every value in the array has its corresponding value squared in the second array. the frequency of values must be the same.

examples
same([1,2,3], [4,1,9]) true
same([1,2,3], [1,9]) false
same([1,2,1], [4,4,1]) false
*/

/* 
concrete examples given, I understand the problem however....
what if array is empty? nested arrays? arrays of only numbers...?
if its just simply an array of numbers...? lets solve that first then i will listen to the rest of the lecture

- given this is under the frequency map section i imagine we can create a map of the squares of array1
- then we make sure the second array has the same map
- need to loop over these two maps and compare the values


*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 * @summary Function that returns true if the square of each number in the first array exists in the same frequency of the second array
 * @example same([1,2,3], [4,1,9]) true
 */

const same = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) return false;

  let arr1Map = {};
  let arr2Map = {};

  /* 
  map of one looks like 
  [1,2,3]
  {
    1: 1,
    4: 1
    9: 1
  }
  
  [1,2,1]
  {
    1: 2,
    4: 1
  }
  */

  for (const num of arr1) {
    let key = num ** 2;
    arr1Map[key] = (arr1Map[key] || 0) + 1;
  }

  for (const num of arr2) {
    arr2Map[num] = ++arr2Map[num] || 1;
  }

  for (const key in arr1Map) {
    if (arr1Map[key] !== arr2Map[key]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]), `true`); //true
console.log(same([1, 2, 3], [1, 9]), `false`); //false
console.log(same([1, 2, 1], [4, 4, 1]), `false`); //false
console.log(same([1, 2, 3, 2], [9, 4, 4, 1]), `true`); //true
