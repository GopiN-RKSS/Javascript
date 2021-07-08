let obj = {};

obj.name = "gopi";

let obj2 = {};
obj2.name = "ravi";

let user = {
  name: "gopi",
  age: "26",
  id: 9,
};

//factory function
function createUser1(name, age, id) {
  return {
    name: name,
    age: age,
    id: id,
  };
}
let res = createUser1("gopi", 26, 7);
console.log(res);
//class
class createUser {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  getName() {
    //console.log(this.name);
    return "Thank you" + " " + this.name;
  }
}

let user2 = new createUser("syed", "23", "9");
console.log(user2.getName());
