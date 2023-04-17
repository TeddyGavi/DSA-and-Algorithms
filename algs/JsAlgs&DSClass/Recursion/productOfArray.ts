/* Write a function called productOfArray which takes in an array of numbers and returns the product of them all. */
const productOfArray = (arr: number[]): number => {
  // let result = 1;
  // const helper = (input: number[]): number => {
  //   if (input.length === 0) return;
  //   result *= input[0];
  //   return helper(input.slice(1));
  // };
  // helper(arr);
  // return result;

  if (arr.length === 0) return 1;
  return (arr[0] *= productOfArray(arr.slice(1)));
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
