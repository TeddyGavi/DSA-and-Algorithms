/* 
Built in sort method uses the unicode characters
*/

const compareNum = (num1: number, num2: number): number => {
  return num1 - num2;
};

const compareLen = (str1: string, str2: string): number => {
  return str1.length - str2.length;
};

const sortNum = [2, 4, 1, 100, 90, 54, 32, 4, 5];
const sortStringLen = ["Bob", "Hello", "HelloWorld", "Me", "I"];

console.log(sortNum.sort(compareNum));
console.log(sortStringLen.sort(compareLen));
