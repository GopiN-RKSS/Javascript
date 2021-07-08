let arr = [2, 4, 5, 6, 7];

function add(arr, message) {
  arr.push(10);
  message();
}

add(arr, message);

function message() {
  console.log("successfully inserted", arr);
}
