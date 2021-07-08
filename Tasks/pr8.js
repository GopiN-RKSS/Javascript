//armstrong Number   153 => 153
// let sum = 0;
let armstrongNumber = (a) => {
  let num = a;
  var b;
  let sum = 0;
  let cubeNum;
  while (a > 0) {
    b = a % 10;
    a = parseInt(a / 10);
    cubeNum = Math.pow(b, 3);
    sum = sum + cubeNum;
  }
  if (sum === num) {
    return "Armstrong Number";
  } else {
    return "Not a Armstrong Number";
  }
};

let res = armstrongNumber(154);
console.log(res);
//Math.pow(num,3)
let num = 153;

let res2 =
  num
    .toString()
    .split("")
    .map((val) => Math.pow(val, 3))
    .reduce((num1, num2) => num1 + num2) == num
    ? "Amstrong"
    : "Not a Amstrong";
console.log(res2);
