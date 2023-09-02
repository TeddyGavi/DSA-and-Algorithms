/* capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 */

const capitalizeFirst = (arr: string[]): string[] => {
  const result = [];
  const helper = (arr: string[]): void => {
    if (arr.length === 0) return;
    let word = arr[0];
    word = word
      .split("")
      .map((x, i) => (i === 0 ? x.toUpperCase() : x))
      .join("");
    result.push(word);
    return helper(arr.slice(1));
  };
  helper(arr);
  return result;
};

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
