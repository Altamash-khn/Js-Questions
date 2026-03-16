function getCommonElements(nums, k) {
  let obj = {};
  const frequentElementsArr = [];

  for (let num of nums) {
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }

  const mostRepeatingValues = Object.values(obj)
    .sort((a, b) => b - a)
    .slice(0, k);

  for (let key in obj) {
    if (mostRepeatingValues.includes(obj[key])) {
      frequentElementsArr.push(key);
    }
  }

  return frequentElementsArr;
}

console.log(getCommonElements([7, 7, 7, 8, 8, 9, 9, 9], 3));
console.log(getCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2));
console.log(getCommonElements([10, 10, 10, 10, 10], 1));
