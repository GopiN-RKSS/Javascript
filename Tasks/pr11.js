function solution(str) {
  str = str.length % 2 == 0 ? str : str + "_";
  let spliced;
  let res = [];
  str
    .split("")
    .forEach((val, index) => index % 2 == 0 && res.push(val + str[index + 1]));
  return res;
}

let result2 = solution("abcde");
console.log(result2);

//solution('abc')
// should return ['ab', 'c_']
