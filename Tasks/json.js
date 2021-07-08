let user = {
  name: "syed",
  id: 9,
};
let jsonData = JSON.stringify(user);
console.log(jsonData);

let jsonToObj = JSON.parse(jsonData);
console.log(jsonToObj);
// '{"name:"syed","id":"6"}';
