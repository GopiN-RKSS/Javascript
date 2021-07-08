let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];

let sortArr = (arr) => {
  console.log(arr.sort((a, b) => a.length - b.length));
};

sortArr(arr);
