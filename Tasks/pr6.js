let users = [
  {
    name: "syed",
    skills: ["C", "Java", "JS", "React"],
  },
  {
    name: "Gopi",
    skills: ["C", "Java", "JS"],
  },
  ,
  {
    name: "Ravi",
    skills: ["C", "Java", "React"],
  },
];
//[]
let arr = [];
users.forEach((value, index) => {
  value.skills.includes("React") && arr.push(value.name);
});
console.log(arr);

let res = users.reduce((arr, { skills, name }) => {
  if (skills.includes("React")) {
    arr.push(name);
    return arr;
  } else {
    return arr;
  }
}, []);
console.log(res);

let numArr = [2, 3, 4, 4, 2, 1, 3, 3, 1];

//{2:2,3:3,1:1,4:2}
//2:00
let countNum = numArr.reduce((obj, num) => {
  if (!obj[num]) {
    obj[num] = 1;
    return obj;
  } else {
    obj[num]++;
    return obj;
  }
}, {});

console.log(countNum);
