function sum(...rest) {
  return Math.min(...rest);
}
let res = sum(2, 3, 4, 1, 13, 6, 7, 23);
console.log(res);
