function largestSubstring(str) {
  let largestSubstring = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      let string = str.slice(i, j);

      if (string.length >= largestSubstring.length && checkString(string)) {
        largestSubstring = string;
      }
    }
  }

  return largestSubstring;
}

function checkString(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      return false;
    } else {
      arr.push(s[i]);
    }
  }

  return true;
}

console.log(largestSubstring("abcabcbb"));
