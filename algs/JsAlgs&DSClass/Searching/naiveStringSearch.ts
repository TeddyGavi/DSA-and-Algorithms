/* Define a function that takes two strings, a longer string and a search string, return the number of times the search string is repeated in the long string */

/**
 *
 * @param {string} longStr String to be searched
 * @param {string}shortStr string to find
 * @returns {number} count of repeated
 * @description the count of how many times the short str appears in the long string
 */
const stringSearch = (longStr: string, shortStr: string): number => {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) {
        break;
      }

      if (j === shortStr.length - 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(stringSearch("hello", "lo"), 1);
console.log(stringSearch("helhelhelhel", "hel"), 4);
console.log(stringSearch("lorie loled", "lol"), 1);
console.log(stringSearch("hi pop", "lol"), 0);
