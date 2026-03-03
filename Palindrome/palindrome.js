// SOLUTION 1
// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str
// }

// SOLUTION 2
// function isPalindrome(s) {
//   if (s.length <= 1) {
//     return true;
//   }
//   if (s[0] !== s[s.length - 1]) return false;
//   return isPalindrome(s.slice(1, s.length - 1));
// }

// console.log(isPalindrome("aba"));

// SOLUTION 1
// function findLargestSubstring(s) {
//   let largestSubstring = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const subString = s.slice(i, j);

//       if (
//         isPalindrome(subString) &&
//         subString.length >= largestSubstring.length
//       ) {
//         largestSubstring = subString;
//       }
//     }
//   }
//   return largestSubstring;
// }

// console.log(findLargestSubstring("abcbcgh"));

// SOLUTION 2
function centrePalindrome(str) {
  let start = 0;
  let end = 0;

  function test(l, r) {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      let length = r - l + 1;

      if (length > end) {
        start = l;
        end = length;
      }

      l--;
      r++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    test(i, i);
    test(i, i + 1);
  }

  return str.slice(start, start + end);
}
console.log(centrePalindrome("abcbcgh"));
