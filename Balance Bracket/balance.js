function checkBalance(str) {
  let obj = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      arr.push(obj[str[i]]);
    } else {
      if (arr.pop() !== str[i]) {
        return false;
      }
    }
  }

  return arr.length === 0;
}

console.log(checkBalance("[]"));
console.log(checkBalance("([)])"));
console.log(checkBalance("([]){}"));
