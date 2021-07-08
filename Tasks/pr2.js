let arr = [2, 3, 4, 9];
let arr2 = [2, 7, 0, 8, 9, 3];
//[2,3,9];
// let arr3 = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr2.length; j++) {
//     if (arr[i] == arr2[j]) {
//       arr3.push(arr[i]);
//     }
//   }
// }
// console.log(arr3);

let res = arr.filter((val) => arr2.includes(val));
console.log(res);
