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
 */
const validAnagram = (str1: string, str2: string): boolean => {
  /* first attempt */
  str1.toLowerCase().split("").sort();
  str2.toLowerCase().split("").sort();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }

  return true;
};
