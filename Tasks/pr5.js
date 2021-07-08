let userList = [
  {
    name: "syed",
    city: "hyd",
  },
  {
    name: "Ravi",
    city: "Delhi",
  },
  {
    name: "Gopi",
    city: "hyd",
  },
];

//{hyd:["syed","Gopi"],del:["Ravi"]}
//reduce

let res = userList.reduce((obj, { name, city }) => {
  if (!obj[city]) {
    obj[city] = [name];
    return obj;
  } else {
    obj[city].push(name);
    return obj;
  }
}, {});
console.log(res);
