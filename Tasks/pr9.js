let a = [
  {
    name: "sandeep",
    age: 39,
    food: "rice",
  },
  {
    name: "gopi",
    age: 3,
    food: "chapathi",
  },
  {
    name: "adhi",
    age: 3,
    food: "rice",
  },
  {
    name: "syed",
    age: 28,
    food: "burger",
  },
];

// chap:[3],rice:[39,3]

let res = a.reduce((obj, val) => {
  if (!obj[val.food]) {
    obj[val.food] = [val.age];
    return obj;
  } else {
    obj[val.food].push(val.age);
    return obj;
  }
}, {});

console.log(res);
