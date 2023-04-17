// iterative
const factorial = (num: number): number => {
  let sum = 1;
  for (let i = num; i > 1; i--) {
    sum *= i;
  }

  return sum;
};

// recursive

const recursiveFac = (num: number): number => {
  if (num === 1) return num;
  return (num *= recursiveFac(num - 1));
};

console.log(factorial(3));
console.log(factorial(4));
console.log(recursiveFac(3));
console.log(recursiveFac(4));
