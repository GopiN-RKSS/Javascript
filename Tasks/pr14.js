a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function comp(a, b) {
  let square = a.map((val) => val * val).sort((a, b) => a - b);
  let sorted_b = b.sort((a, b) => a - b);
  if (JSON.stringify(square) === JSON.stringify(sorted_b)) {
    return true;
  } else {
    return false;
  }
}
let res = comp(a, b);
console.log(res);
