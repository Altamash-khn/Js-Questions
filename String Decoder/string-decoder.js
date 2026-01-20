// SOLUTIUON 1
function xyz(str) {
  let expandedStr = "";
  let copy = str;
  let charArr = [];
  for (let i = 0; i < str.length; i++) {
    let char = String(str[i]);
    if (char >= "a" && char <= "z") {
      charArr.push(str[i]);
    }
  }

  for (let char of charArr) {
    let index = copy.indexOf(char);
    let loopNum = copy.slice(0, index);
    copy = copy.slice(index + 1);
    for (let i = 0; i < loopNum; i++) {
      expandedStr += char;
    }
  }
  return expandedStr;
}

console.log(xyz("3a2b1c"));
