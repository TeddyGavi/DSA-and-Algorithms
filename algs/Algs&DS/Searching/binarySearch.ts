const binarySearch = (arr: number[], value: number): number => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let guess = Math.floor((min + max) / 2);
    // console.log(`guess ${guess} min ${min} max ${max}`);

    if (arr[guess] === value) {
      return guess;
    } else if (arr[guess] < value) {
      min = guess + 1;
    } else if (arr[guess] > value) {
      max = guess - 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10,
  ),
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95,
  ),
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100,
  ),
); // -1
