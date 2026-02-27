function isPalindrome(str) {
  return str.split("").reverse().join("") === str
}

function findLargestSubstring(s){
    let largestSubstring = "";
    
    for(let i = 0; i < s.length; i++){
        for(let j = i +1; j <= s.length; j++){
            const subString = s.slice(i, j);
            
            if(isPalindrome(subString) &&  subString.length >= largestSubstring.length){
                largestSubstring = subString;
            }
        }
    }
    return largestSubstring
}


console.log(findLargestSubstring('abcbcgh'))
