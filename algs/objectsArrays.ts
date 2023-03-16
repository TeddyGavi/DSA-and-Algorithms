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
