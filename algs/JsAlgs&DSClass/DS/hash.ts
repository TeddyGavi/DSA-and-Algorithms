
function hash(key: string, arrayLength: number) {
  let total = 0;
  for (const char of key) {
    const val = char.charCodeAt(0) - 96;
    total = (total + val) % arrayLength;
  }
  return total;
}

console.log(hash("red", 10));
console.log(hash("red", 10));
console.log(hash("red", 10));
console.log(hash("red", 10));
console.log(hash("pink", 10));
console.log(hash("pink", 10));
console.log(hash("pink", 10));
console.log(hash("pink", 10));

// only strings!, not constant time, could be more distributed 
