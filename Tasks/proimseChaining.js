let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    if (true) {
      res("success");
    } else rej("failed");
  }, 3000);
})
  .then((msg) => {
    console.log(msg);
    new Promise((res2, rej2) => {
      setTimeout(() => {
        res2("succes2");
      }, 2000);
    });
  })
  .catch((msg) => console.log(msg));

promise1.then((msg) => console.log("success2"));

//

async function promises() {
  let promise1 = new Promise((res, rej) => {
    if (true) {
      res("sucess");
    }
  });

  let res = await promise1;
  console.log(res);

  let promise2 = new Promise((res, rej) => {
    if (true) {
      res("succes2");
    }
  });

  let res2 = await promise2;
  console.log(res2);
}

promises();
