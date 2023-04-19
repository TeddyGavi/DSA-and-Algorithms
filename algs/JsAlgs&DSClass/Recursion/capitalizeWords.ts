/* capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 */

const capitalizeWords = (arr: string[]): string[] => {
  const result = [];
  const helper = (arr: string[]): void => {
    if (arr.length === 0) return;
    let word = arr[0];
    word = word
      .split("")
      .map((x) => x.toUpperCase())
      .join("");
    result.push(word);
    return helper(arr.slice(1));
  };
  helper(arr);
  return result;
};

let words = ["i", "am", "learning", "recursion"];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(capitalizeWords(words));
