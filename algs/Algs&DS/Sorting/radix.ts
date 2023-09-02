const getDigit = (num: number, place: number): number => {
  // return +num.toString().split("").reverse().at(place) || 0;
  return Math.floor(Math.abs(num) / 10 ** place) % 10;
};

const countDigits = (num: number): number => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums: number[]): number => {
  let current = 0;
  nums.forEach((num) => {
    current = Math.max(current, countDigits(num));
  });
  return current;
};

console.log(getDigit(12345, 0), 5);
console.log(getDigit(12345, 1), 4);
console.log(getDigit(12345, 2), 3);
console.log(getDigit(12345, 3), 2);
console.log(getDigit(12345, 4), 1);
console.log(getDigit(12345, 5), 0);

console.log(countDigits(1), 1);
console.log(countDigits(23), 2);
console.log(countDigits(4560), 4);

console.log(mostDigits([1234, 56, 4]), 4);
console.log(mostDigits([12, 536, 4]), 3);
console.log(mostDigits([1234, 562344, 4]), 6);

const radixSort = (arr: number[]): number[] => {
  const largestNum = mostDigits(arr);

  for (let i = 0; i < largestNum; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

console.log(radixSort([4, 3, 5, 6, 12, 3, 789]));
console.log(radixSort([3, 9, 4, 2, 234, 3, 34, 101, 0, 789]));
