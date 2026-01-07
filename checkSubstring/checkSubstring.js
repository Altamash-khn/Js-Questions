function areInOrder(str, substring) {
  let index = str.indexOf(substring[0]);
  if (index === -1) return false;

  for (let i = 1; i < substring.length; i++) {
    let newIndex = str.indexOf(substring[i], index + 1);

    if (newIndex === -1) {
      return false;
    }
    index = newIndex;
  }
  return true;
}

console.log(areInOrder("abcdef", "ace")); // true
console.log(areInOrder("abcdef", "aec")); // false
