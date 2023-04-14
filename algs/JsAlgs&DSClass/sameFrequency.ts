/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false 

assume this is a frequency map problem...look up of a map is O(n) so this should work

*/

export interface Map {
  [key: string]: number;
}

/**
 * @param {string | string[] | number[]} input -input can be an array of strings or numbers
 * @returns {Map} map which is an object with the structure of 
 * @example interface Map {
  [key: string]: number;
}
 */
export const createMap = (input: string | string[] | number[]): Map => {
  const map = {};
  for (const ele of input) {
    map[ele] = ++map[ele] || 1;
  }
  return map;
};

/**
 * @param {number} n1
 * @param {number} n2
 * @returns {boolean}
 * @description function which takes two numbers and returns true if they have the same number of individual digits
 *
 */

const sameFrequency = (n1: number, n2: number): boolean => {
  const map1 = createMap(String(n1));
  const map2 = createMap(String(n2));

  for (const digit in map1) {
    if (map1[digit] !== map2[digit]) return false;
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
