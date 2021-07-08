function add(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

let res = add(3);
console.log(res(4)(5));
