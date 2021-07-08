// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("Failure");
//   }
// });
// p.then((message) => {
//   console.log("This is in the resolve:" + message);
// }).catch((message) => {
//   console.log("This is in the catch:" + message);
// });

async function display() {
  let promise = new Promise((resolve, reject) => {
    let a = 2;
    if (a === 2) {
      resolve("success");
    } else {
      reject("failure");
    }
  });
  let res = await promise;
  console.log(res);
}
display();
