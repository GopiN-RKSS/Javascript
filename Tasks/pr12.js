let str1 = "aaabdcaabcdefdsabc";
let str2 = "";
let substring;
for (let i = 0; i < str1.length; i++) {
  if (str1[i] <= str1[i + 1]) {
    //str2 += str1[i];
    substring = str1.substring(i, i + 1);
    //console.log(substring);
    str2 += substring;
  } else {
    continue;
  }
}
console.log(str2);
