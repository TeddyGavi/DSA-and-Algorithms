
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

function hashTwo(key: string, arrayLength: number) {
  let total = 0
  const weird = 31

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i]
    const value = char.charCodeAt(0) - 96
    total = (total * weird + value) & arrayLength
  }
  return total
}

console.log(hashTwo("red", 10));
console.log(hashTwo("red", 10));
console.log(hashTwo("red", 10));
console.log(hashTwo("red", 10));
console.log(hashTwo("pink", 10));
console.log(hashTwo("pink", 10));
console.log(hashTwo("pink", 10));
