let arr = [2, 3, 4, 5, 2, 3, 7, 3, 2, 5, 1];
//[2,3,5]

// console.log(arr.indexOf(4));
// console.log(arr.lastIndexOf(4));

let res = Array.from(
  new Set(arr.filter((val, index) => arr.indexOf(val) !== index))
);
console.log(res);

// using loops

let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr1.push(arr[i]);
    }
  }
}
let set = Array.from(new Set(arr1));
console.log(set);
