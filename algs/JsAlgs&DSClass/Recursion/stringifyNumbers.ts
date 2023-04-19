/* stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
 */

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

/* 
RESULT: 
stringifyNumbers(obj)


{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
} */

const stringifyNumbers = (obj: Object): Object => {
  const copied = JSON.parse(JSON.stringify(obj)); //Object.assign({}, obj);
  const helper = (obj: Object) => {
    Object.keys(obj).forEach((key) => {
      let val = obj[key];
      if (typeof val === "number") {
        obj[key] = val.toString();
      } else if (typeof val === "object" && !Array.isArray(val)) {
        return helper(val);
      }
    });
  };
  helper(copied);
  return copied;
};

console.log(obj1);
console.log(stringifyNumbers(obj1));

console.log(obj1);
