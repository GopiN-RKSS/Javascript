function sum(a) {
console.log(a)

  function add(b) {
    return a + b;
  }
  return add;
}

let res = sum(2);
console.log(res());

