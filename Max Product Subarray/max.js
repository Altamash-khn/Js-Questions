// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// SOLUTION 1
function getMaxProd(arr) {
  let maxProduct = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let prev = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let product = arr[j] * prev;

      if (product > maxProduct) {
        maxProduct = product;
      }

      prev = product;
    }
  }
  return maxProduct;
}
console.log(getMaxProd([1, 2, 3, -2]));
