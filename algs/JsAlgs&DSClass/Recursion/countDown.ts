const countDown = (num: number): void => {
  if (num <= 0) {
    console.log("Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

console.log(countDown(5));
console.log(countDown(9));
console.log(countDown(3));
