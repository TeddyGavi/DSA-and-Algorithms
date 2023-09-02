/* 
validAnagram("","") // true
validAnagram("aaz","zza") //false
validAnagram("anagram","nagaram") //true
validAnagram("rat","car") // false
validAnagram("awesome","awesom") //false
validAnagram("qwerty","qeywrt") // true
validAnagram("texttwisttime","timetwisttext") //true


 Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters such as cinema, formed from iceman.

 yes i understand need some clarifications
 only lowercase?
 only letters? no numbers assuming
 spaces? any spaces and how to deal with?

 example given.

 first thought, sort letters, then loop over and compare and if not equal at any point then return false
 frequency map might be faster?



*/

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 * @summary Function which given two strings, will return true if they are valid Anagrams, ie cinema, iceman is true
 * @example  validAnagram("anagram","nagaram") // true
 */
const validAnagram = (str1: string, str2: string): boolean => {
  /* first attempt 
  let sort1 = str1.toLowerCase().split("").sort();
  let sort2 = str2.toLowerCase().split("").sort();

  for (let i = 0; i < str1.length; i++) {
    if (sort1[i] !== sort2[i]) return false;
  }
*/

  /* frequency map version */
  if (str1.length !== str2.length) return false;
   const map1 = {};

  for (const char of str1) {
    map1[char] = ++map1[char] || 1;
  }

  for (const char of str2) {
    if (!map1[char]) {
      return false;
    } else {
      --map1[char];
    }
  }
  /*

another loop is not needed if we simply decrement the count and check for falsy condition

   for (const key in map1) {
     if (map1[key] !== 0) return false;
   }
  
  */
  return true;
};

console.log(validAnagram("", ""), true);
console.log(validAnagram("aaz", "zza"), false);
console.log(validAnagram("anagram", "nagaram"), true);
console.log(validAnagram("rat", "car"), false);
console.log(validAnagram("awesome", "awesom"), false);
console.log(validAnagram("qwerty", "qeywrt"), true);
console.log(validAnagram("texttwisttime", "timetwisttext"), true);
