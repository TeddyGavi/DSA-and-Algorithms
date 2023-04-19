/* nestedEvenSum
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

const nestedEvenSum = (obj: Object): number => {
  let result = 0;

  // const helper = (obj: Object) => {
  //   for (const ele in obj) {
  //     // if (!obj[ele]) return;
  //     if (
  //       typeof obj[ele] === "number" &&
  //       obj[ele] % 2 === 0 &&
  //       typeof obj[ele] !== "object"
  //     ) {
  //       result += obj[ele];
  //     }
  //     if (typeof obj[ele] === "object" && !Array.isArray(obj[ele])) {
  //       console.log(obj[ele]);
  //       return helper(obj[ele]);
  //     }
  //   }
  // };

  // helper(obj);
  const helper = (obj: Object) => {
    Object.keys(obj).forEach((key) => {
      let val = obj[key];
      if (typeof val !== "object" && typeof val === "number" && val % 2 === 0) {
        result += val;
      }
      if (typeof val === "object") {
        console.log(val);
        return helper(obj[key]);
      }
    });
  };
  helper(obj);
  return result;
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
