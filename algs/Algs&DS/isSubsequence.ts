/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1) */
/**
 *
 * @param substr1 sub string to check
 * @param str2 string that may contain the substring
 * @returns true is the substring exists inside the string
 */
const isSubsequence = (substr1: string, str2: string): boolean => {
  let subPointer = 0;

  for (let i = 0; i < str2.length; i++) {
    if (substr1[subPointer] === str2[i]) {
      subPointer++;
    }
  }
  return subPointer === substr1.length;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
