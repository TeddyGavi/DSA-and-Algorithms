/* 

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/


/**
 * @param {string} string
 * @description Removes all white space and alphanumeric characters and returns true or false is phrase is a palindrome
 * @return {boolean}
 */

const str1 = "A man, a plan, a canal: Panama"
const str2 = "race a car"
const str3 = " "
const str4 = "aa"

const isPalindrome = function(string: string): boolean {
  const nowht = string.replace(/[\W_]+/g, "").toLowerCase()
  // const nowht = string.replace(/[^\w_\s]|_/g, '').toLowerCase()
  let end = nowht.length -1

  if (end < 1) return true

  for (let i = 0; i < nowht.length; i++) {
      if (nowht[i] !== nowht[end]) {
          return false
      } else if ( i >= end) {
          return true
      }
      end--
  }
};

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))