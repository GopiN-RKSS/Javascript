function getName(greet, msg) {
  return greet + " " + this.name + " " + msg;
}

//call apply bind

let user = {
  name: "syed",
  id: 9,
  city: "hyd",
};

console.log(getName.apply(user, ["Hello", "How are u ?"]));

let user2 = {
  name: "Gopi",
  id: 9,
};
console.log(getName.call(user2, "Hi", "How are u ?"));

let binded = getName.bind(user);
console.log(binded("hi", "i am good"));
