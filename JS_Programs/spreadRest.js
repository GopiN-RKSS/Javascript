let arr = [1, 2, 3, 4, "gopi", "dhoni"];

//array destructuring
let [a, b] = arr;

//console.log(a, b);

// rest operator
let [c, d, ...rest] = arr;
//console.log(c, d, rest);

//spread operator

let newArr = [...arr];
newArr.push("kohli"); // when something added to newArr it won't change original arr. That is the use of spread
//console.log("arr:", arr);
//console.log("newArr:", newArr);

let arr2 = [0, 1, ...arr, 2, 3, ...newArr];
//console.log(arr2);

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

// destructuring
let [sum, product] = sumAndMultiply(2, 3);
console.log("sum is:", sum, "product is:", product);
