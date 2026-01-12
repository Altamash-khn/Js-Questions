// THIS WILL FIND THE FIRST 'N' NUMBERS IN THE FIBONACCI SEQUENCE
// 1. using a loop to generate the Fibonacci sequence up to 'num' elements
// function getFibonacciNumbers(num) {
//   let fibonacciArr = [0, 1];

//   let num1 = 0;
//   let num2 = 1;
//   let nextNum = null;

//   for (let i = 2; i < num; i++) {
//     nextNum = num1 + num2;
//     fibonacciArr.push(nextNum);
//     num1 = num2;
//     num2 = nextNum;
//     nextNum = null;
//   }

//   return fibonacciArr;
// }
// console.log(getFibonacciNumbers(10));

// 2. using recursion to generate the Fibonacci sequence up to 'num' elements
function getFibNumbersTill(n, a = 0, b = 1, result = [0]) {
  if (n <= 0) {
    return "number should positive";
  }

  if (result.length === n) {
    return result;
  }

  result.push(b);
  return getFibNumbersTill(n, b, b + a, result);
}

console.log(getFibNumbersTill(9));

// THIS WILL FIND ALL FIBONACCI NUMBERS LESS THAN OR EQUAL TO 'N'
// function fib(n) {
//   let fibArr = [0, 1];

//   while (fibArr[fibArr.length - 1] < n) {
//     let newFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];

//     if (newFib <= n) {
//       fibArr.push(newFib);
//     } else {
//       break;
//     }
//   }

//   return fibArr;
// }

// USING RECURSION
function fibonacciUpTo(n, a = 0, b = 1, result = [0]) {
  if (b > n) {
    return result;
  }

  result.push(b);
  return fibonacciUpTo(n, b, a + b, result);
}

console.log(fibonacciUpTo(10));
