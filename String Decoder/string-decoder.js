// SOLUTIUON 1
// function decodeString(str) {
//   let expandedStr = "";
//   let copy = str;
//   let charArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = String(str[i]);
//     if (char >= "a" && char <= "z") {
//       charArr.push(str[i]);
//     }
//   }

//   for (let char of charArr) {
//     let index = copy.indexOf(char);
//     let loopNum = copy.slice(0, index);
//     copy = copy.slice(index + 1);
//     for (let i = 0; i < loopNum; i++) {
//       expandedStr += char;
//     }
//   }
//   return expandedStr;
// }

// console.log(decodeString("3a2b1c"));

// SOLUTION 2
function xyz(str) {
  let value = "";

  let previousIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(+str[i])) {
      for (let j = 0; j < +str.slice(previousIndex, i); j++) {
        value += str[i];
      }
      previousIndex = i + 1;
    }
  }

  return value;
}

console.log(xyz("3a2b1c"));
