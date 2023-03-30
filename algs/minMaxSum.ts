// minMaxSum
// write a function that given 5 numbers in an array will return the lowest
// and the highest possible values when summing 4 out of the 5 numbers.
// print these values to the console.

// all pos, all whole nums
// return two values [high, low]
//
// [5, 4, 3, 2, 1] high 14, 10
// sort input,
// low sum is sum [1,2,3,4] (leave out last num)
// high sum is sum [2,3,4,5] (leave out first num)

const minMaxSum = (input: number[]): number[] => {
  let min = 0;
  let max = 0;
  const sortedInput = input.sort((a, b) => a - b);

  for (let i = 1; i < sortedInput.length; i++) {
    max += sortedInput[i];
  }

  for (let i = 0; i < sortedInput.length - 1; i++) {
    min += sortedInput[i];
  }

  return [max, min];
};

console.log(minMaxSum([5, 4, 3, 2, 1]));

/* 
dsa-algs [ main][🤷⇡1][📦 v1.0.0][ v16.18.0]
➜  node dist/minMaxSum.js
[ 14, 10 ]

 */
