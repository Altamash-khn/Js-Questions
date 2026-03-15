// Write a function that takes an array of integers as input and returns the maximum sum of a contiguous subarray within the array.

// Solution 1
// function getSum(arr) {
//   let maxSum = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let currentSum = arr[i];

//     for (let j = i + 1; j < arr.length; j++) {
//       currentSum += arr[j];

//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//       }
//     }
//   }

//   return maxSum;
// }

// Solution 2 (Kadane's Algorithm)
function getSum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(getSum([2, -3, 4, 2, 5]));
