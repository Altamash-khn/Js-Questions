// Find the sum of digits of a number.

// SOLUTION 1
// function sumAllDigits(num) {
//   let str = num.toString();
//   let arr = str.split("");
//   let sumOfAllDigits = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumOfAllDigits += +arr[i];
//   }
//   return sumOfAllDigits;
// }


// SOLUTION 2
// function sumAllDigits(num) {
//   let str = num.toString();
//   let finalStr = "";
//   for (let i = 0; i < str.length; i++) {
//     finalStr += str[i] + "+";
//   }
//   finalStr = finalStr.slice(0, -1);
//   return eval(finalStr);
// }

// SOLUTION 3
// function sumAllDigits(num) {
//   let arr = Array.from(String(num), Number);
//   return arr.reduce(function (acc, currVal) {
//     acc += currVal;
//     return acc;
//   });
// }

function sumOfDigitsRecursive(num) {
    if (!num) {
        return 0;
    }
    
    num = num.toString()
    
    return parseInt(num[num.length -1]) 
        + parseInt(sumOfDigitsRecursive(num.slice(0, num.length -1)));
}

console.log(sumOfDigitsRecursive(1234))
