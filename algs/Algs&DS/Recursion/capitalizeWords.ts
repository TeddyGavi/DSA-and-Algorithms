/* capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 */

const capitalizeWords = (arr: string[]): string[] => {
  /*   const result = [];
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
  return result; */
  console.log(arr);
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  let result = capitalizeWords(arr.slice(0, -1));
  console.log(result);
  result.push(arr.slice(-1)[0].toUpperCase());
  return result;
};

let words = ["i", "am", "learning", "recursion"];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(capitalizeWords(words));
