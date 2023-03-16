import * as perf from "perf_hooks";
type person = { firstName: string; lastName: string; occupation: string };

const dude: person = {
  firstName: "Bob",
  lastName: "Tilly",
  occupation: "programmer",
};

console.log(dude);

const keyArr = Object.keys(dude);
const value = Object.values(dude);
const lookUp = dude.hasOwnProperty("firstName");

console.log(keyArr, value, lookUp);

type house = string[];

const myHome: house = ["red front door", "white curtains", "4 bedroom"];
/* Good stuff here, as this is O(1) */
console.log(myHome);
const t1 = perf.performance.now();
myHome.push("2 bathrooms");
const t2 = perf.performance.now();
console.log(myHome, `took ${t1 - t2 / 1000} seconds`);
myHome.pop();
console.log(myHome);
myHome.shift();
console.log(myHome);
myHome.unshift("red front door");
console.log(myHome);
