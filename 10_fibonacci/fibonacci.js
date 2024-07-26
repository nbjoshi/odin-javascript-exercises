const fibonacci = function(a) {
    // Initialize beginning sequence
    let f = [0, 1];
    // Edge case: negative value
    if (a < 0) { return "OOPS"; };

    // Main loop for creating sequence
    let i = 2;
    while(f.length <= a) {
        let sum = f[i-1] + f[i-2];
        f.push(sum)
        i++
    }
    return f[a];
};

// Do not edit below this line
module.exports = fibonacci;