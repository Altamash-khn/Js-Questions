function getBinary(n, arr = []) {
  if (n <= 0) {
    return arr.join("");
  }

  arr.unshift(n % 2);

  return getBinary(Math.floor(n / 2), arr);
}

console.log(getBinary(8));
