let arr = [2, 2, 4, 3, 4, 2, 3, 3];

//[[2,2,2],[4,4],[3,3,3]]
// let arr3 = [];
let arr2 = Array.from(new Set(arr));
// for (let i = 0; i < arr2.length; i++) {
//   let arr4 = [];
//   for (let j = 0; j < arr.length; j++) {
//     if (arr2[i] == arr[j]) {
//       arr4.push(arr[j]);
//     }
//   }
//   arr3.push(arr4);
// }
// console.log(arr3);

let res = arr.sort((val1, val2) => val1 - val2);
console.log(res);
// let result = [];
// for (i = 0; i < res.length; i++) {
//   let startIndex = arr.indexOf(arr2[i]);
//   let lastIndex = arr.lastIndexOf(arr2[i]);
//   let resArr = arr.slice(startIndex, lastIndex + 1);
//   result.push(resArr);
//}
let result2 = arr2.map((val) => {
  let startIndex = res.indexOf(val);
  let lastIndex = res.lastIndexOf(val);
  return res.slice(startIndex, lastIndex + 1);
});
console.log(result2);
