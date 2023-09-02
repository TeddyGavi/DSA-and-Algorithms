const sumRange = (num: number): number => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(8));
console.log(sumRange(3));

// 3 + (2 + 1)
