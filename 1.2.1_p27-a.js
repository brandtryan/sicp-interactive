// substitution model of section 1.1.5
function factorial(n) {
    return n === 1
        ? 1
        : n * factorial(n -1);
}
factorial(6);