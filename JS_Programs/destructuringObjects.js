let person = {
  name: "gopi",
  age: 26,
  city: "kmm",
  addr: { city: "hyd", vil: "bkl" },
};

// object destructuring
let { name, city } = person;

let {
  addr: { vil },
} = person;
//console.log(name);
//console.log(city);
//console.log(vil);
// rest operator

let { age, ...rest } = person;
console.log(rest);
