/* collectStrings
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

*/

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const collectStrings = (obj: Object): string[] => {
  const result: string[] = [];

  const helper = (obj: Object) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "string") {
        result.push(obj[key]);
      } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        return helper(obj[key]);
      }
    });
  };
  helper(obj);
  return result;
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
