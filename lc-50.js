var myPow = function(x, n) {
    if (n === 0) return 1;
     if (n < 0) return 1 / myPow(x, -n);

    let half = myPow(x, Math.floor(n / 2)); // Recursive call on n/2
    
    if (n % 2 === 0) {
        return half * half; // If n is even
    } else {
        return x * half * half; // If n is odd
    }
};
