function solution(str) {
  str = str.length % 2 == 0 ? str : str + "_";
  let arr = [];
  let res = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      let spliced = res.splice(0, 2).join("");
      console.log(spliced, res);
      arr.push(spliced);
    }
  }
  return arr;
}
let result = solution("abcde");
console.log(result);

//solution('abc') // should return ['ab', 'c_']
