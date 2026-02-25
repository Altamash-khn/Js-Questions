// SOLUTION 1
// function getBinary(n) {
//   const results = [];
//   const options = [];

//   function backtrack() {
//     if (options.length === n) {
//       results.push(options.join(""));
//       return;
//     }

//     options.push("0");
//     backtrack();
//     options.pop();

//     options.push("1");
//     backtrack();
//     options.pop();
//   }

//   backtrack();
//   return results;
// }


// SOLUTION 2
// function getBinary(n){
//     let results = [""]
    
//     for(let i = 1; i <= n; i++){
//         const newResults = [];
        
//         for(let key of results){
//             newResults.push(key + "O")
//             newResults.push(key + "1")
//         }
        
//         results = newResults
//     }
    
//     return results
// }

// SOLUTION 3
function getBinary(n){
    const results = [];

    function binary(curr){
        if(curr.length === n){
            results.push(curr);
            return
        }

        binary(curr + "0");
        binary(curr + "1")
    }

    binary("");
    return results
}

console.log(getBinary(2));
