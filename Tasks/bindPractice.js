let data = { fname: "gopi", lname: "chand", age: 26 };
let data1 = { fname: "dhoni", lname: "ms", age: 39 };
function getFullName(msg, greet) {
  return msg + " " + this.fname + " " + this.lname + " " + greet;
}

// console.log(getFullName.call(data, "hi", "Where r u"));
// console.log(getFullName.apply(data, ["hi", "How r u"]));
// console.log(getFullName.call(data1, "hi", "Where r u"));
let binded = getFullName.bind(data);
console.log(binded("Wt dng", "You r good"));
console.log(binded("Hey", "Nice Man"));
