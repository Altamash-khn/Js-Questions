function gcd(n1, n2){
    if(n2 === 0){
        return Math.abs(n1)
    }
    
    return gcd(n2, n1 % n2)
}

console.log(gcd(10, 5))
