/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map1 = {};
  for (const char of s) {
    map1[char] = ++map1[char] || 1;
  }

  for (const char of t) {
    if (!map1[char]) {
      return false;
    } else {
      --map1[char];
    }
  }
  console.log(map1);
  return true;
};
