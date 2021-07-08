//[3,2,9],[1,2] --> [3,4,1]

let arr1 = [3, 2, 9];
let arr2 = [1, 2];

let number1 = parseInt(arr1.join(""));
let number2 = parseInt(arr2.join(""));

let res = (number1 + number2)
  .toString()
  .split("")
  .map((value) => parseInt(value));
// let str = res.toString();
// let arr3 = str.split("");

// let result = res.map((value, index) => {
//   return parseInt(value);
// });

console.log(res);
