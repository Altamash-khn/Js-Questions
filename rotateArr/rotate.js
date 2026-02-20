// Solution 1
// function rotate(arr, n) {
//   let rotatedArr = [...arr];
//   for (let i = 1; i <= n; i++) {
//     let lastELEMENT = rotatedArr[rotatedArr.length - 1];

//     rotatedArr.pop();
//     rotatedArr.unshift(lastELEMENT);
//   }

//   return rotatedArr;
// }
// console.log(rotate([1, 2, 3, 4, 5, 6], 1));

// Solution 2
// function rotate(arr, n) {
//   let rotatedArr = [...arr];
//   let len = rotatedArr.length;
//   n = n % len;
//   for (let i = 1; i <= n; i++) {
//     let lastELEMENT = rotatedArr[rotatedArr.length - 1];

//     rotatedArr.pop();
//     rotatedArr.unshift(lastELEMENT);
//   }

//   return rotatedArr;
// }

function rotate(arr, n) {
  let len = arr.length;
  n = n % len;

  return [...arr.slice(len - n), ...arr.slice(0, len - n)];
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2));
