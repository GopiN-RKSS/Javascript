let str = "Hello World";
//"olleH dlroW"

/*
split()
["hello","world"]


*/

let res = str.split(" ").map((val) => val.split("").reverse().join(""));
console.log(res);
