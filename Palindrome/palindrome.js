// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str
// }

// function findLargestSubstring(s){
//     let largestSubstring = "";
    
//     for(let i = 0; i < s.length; i++){
//         for(let j = i +1; j <= s.length; j++){
//             const subString = s.slice(i, j);
            
//             if(isPalindrome(subString) &&  subString.length >= largestSubstring.length){
//                 largestSubstring = subString;
//             }
//         }
//     }
//     return largestSubstring
// }


// console.log(findLargestSubstring('abcbcgh'))

function isPalindrome(s){
    if(s.length <= 1){
        return true
    }
    if(s[0] !== s[s.length -1]) return false
    return isPalindrome(s.slice(1, s.length-1))
}
console.log(isPalindrome("aba"))
