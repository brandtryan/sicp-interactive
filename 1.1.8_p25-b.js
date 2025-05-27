function sqrt(x) {
    function is_good_enough(guess, x) {
        return math_abs(square(guess) -x) < 0.001;
    }
    function improve(guess, x) {
        return average(guess, x / guess);
    }
    function sqrt_iter(guess, x) {
        return is_good_enough(guess, x)
            ? guess
            : sqrt_iter(improve(guess, x), x);
    }
    function square(x) {
        return x * x;
    }
    function average(x, y) {
        return (x + y) / 2;
    }
    return sqrt_iter(1, x);
}

sqrt(4);