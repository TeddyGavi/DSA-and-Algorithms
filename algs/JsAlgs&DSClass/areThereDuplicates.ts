/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1) */

import { Map, createMap } from "./sameFrequency.js";
/**
 *
 * @param args all arguments to the functions expected string or number array
 * @returns a boolean value, true if there are duplicates and false otherwise
 */
const areThereDuplicates = (...args: string[] | number[]): boolean => {
  let compare = 0;
  args.sort();

  for (let i = 1; i < args.length; i++) {
    if (args[i] === args[compare]) return true;
    else compare++;
  }
  return false;
  /* 
  const map = createMap(args);
  for (const ele in map) {
    if (map[ele] > 1) return true;
  }
  return false; */
};

console.log(areThereDuplicates(1, 2, 3)); // false )
console.log(areThereDuplicates(1, 2, 2)); // true )
console.log(areThereDuplicates("a", "b", "c", "a")); // true
