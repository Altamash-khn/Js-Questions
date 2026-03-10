// Solution 1
// function largestSubstring(str) {
//   let largestSubstring = "";

//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       let string = str.slice(i, j);

//       if (string.length >= largestSubstring.length && checkString(string)) {
//         largestSubstring = string;
//       }
//     }
//   }

//   return largestSubstring;
// }

// function checkString(s) {
//   let arr = [];

//   for (let i = 0; i < s.length; i++) {
//     if (arr.includes(s[i])) {
//       return false;
//     } else {
//       arr.push(s[i]);
//     }
//   }

//   return true;
// }

// console.log(largestSubstring("abcabcbb"));

// Solution 2
function largestSubstring(str) {
  let start = 0;
  let end = 0;

  function expand(left, right) {
    const arr = [];
    while (
      left >= 0 &&
      right < str.length &&
      !arr.includes(str[left]) &&
      !arr.includes(str[right])
    ) {
      arr.push(str[right]);
      arr.push(str[left]);
      let length = right - left + 1;

      if (length > end - start + 1) {
        start = left;
        end = right;
      }

      left--;
      right++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  return str.slice(start, end);
}

console.log(largestSubstring("abcabcbb"));
