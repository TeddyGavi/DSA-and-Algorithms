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

interface Map {
  [key: string]: number;
}
const createMap = (input: string | string[] | number[]): Map => {
  const map = {};
  for (const ele of input) {
    map[ele] = ++map[ele] || 1;
  }
  return map;
};
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
