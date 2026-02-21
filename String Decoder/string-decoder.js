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
// function xyz(str) {
//   let value = "";

//   let previousIndex = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (isNaN(+str[i])) {
//       for (let j = 0; j < +str.slice(previousIndex, i); j++) {
//         value += str[i];
//       }
//       previousIndex = i + 1;
//     }
//   }

//   return value;
// }

// console.log(xyz("3a2b1c"));

function test(str) {
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] >= "a" && str[i] <= "z") ||
      (str[i] >= "A" && str[i] <= "Z") ||
      !isNaN(str[i])
    ) {
      str2 += str[i];
    }
  }

  return str2;
}

function decodeString(s) {
  let stringDecode = test(s);
  let decodedString = "";
  let number = "";

  for (let i = stringDecode.length - 1; i >= 0; i--) {
    if (!isNaN(stringDecode[i])) {
      number = stringDecode[i] + number;
    } else {
      decodedString = decodedString.repeat(+number);
      number = "";
      decodedString = stringDecode[i] + decodedString;
    }
  }
  return decodedString.repeat(+number);
}

console.log(decodeString("2[a3[b2[c]]]"));
console.log(decodeString("2[ab]"));
console.log(decodeString("10[a]"));
console.log(decodeString("3[ab2[c]]"));
console.log(decodeString("3a4b2c"));
