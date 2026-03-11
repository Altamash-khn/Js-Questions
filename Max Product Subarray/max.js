// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// SOLUTION 1
// function getMaxProd(arr) {
//   let maxProduct = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let prev = arr[i];

//     for (let j = i + 1; j < arr.length; j++) {
//       let product = arr[j] * prev;

//       if (product > maxProduct) {
//         maxProduct = product;
//       }

//       prev = product;
//     }
//   }
//   return maxProduct;
// }
// console.log(getMaxProd([1, 2, 3, -2]));

// SOLUTION 2
function getMaxProduct(arr){
    let max = arr[0];
    let min = arr[0];
    let result = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        
        let currentMin = Math.min(arr[i], arr[i] * min, arr[i] * max)
        let currentMax = Math.max(arr[i], arr[i] * min, arr[i] * max)

        min = currentMin;
        max = currentMax
        
        result = Math.max(result, currentMax)
    }
    
    return result
}

console.log(getMaxProduct([-2, 3, -4]))
