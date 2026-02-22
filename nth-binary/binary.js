function getBinary(n) {
  const results = [];
  const options = [];

  function backtrack() {
    if (options.length === n) {
      results.push(options.join(""));
      return;
    }

    options.push("0");
    backtrack();
    options.pop();

    options.push("1");
    backtrack();
    options.pop();
  }

  backtrack();
  return results;
}

console.log(getBinary(2));
