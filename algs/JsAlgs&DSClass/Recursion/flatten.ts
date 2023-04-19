/* flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

const flatten = (arr: Array<any>): Array<any> => {
  // if (arr.length === 0) return;

  // const flat = arr.reduce((acc, curr) => {
  //   if (Array.isArray(curr)) {
  //     return acc.concat(flatten(curr));
  //   }
  //   return acc.concat(curr);
  // }, []);

  // return flat;

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
