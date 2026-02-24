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
function getBinary(n){
    let results = [""]
    
    for(let i = 1; i <= n; i++){
        const newResults = [];
        
        for(let key of results){
            newResults.push(key + "O")
            newResults.push(key + "1")
        }
        
        results = newResults
    }
    
    return results
}
console.log(getBinary(2));
