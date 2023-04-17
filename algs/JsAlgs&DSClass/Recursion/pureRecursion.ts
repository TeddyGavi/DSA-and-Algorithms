const collectOdds = (arr: number[]): number[] => {
  const result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  // return [...result, ...collectOdds(arr.slice(1))]; //dangerous! spread is constantly reallocating memory

  return result.concat(collectOdds(arr.slice(1))); // also dangerous...
};
console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
