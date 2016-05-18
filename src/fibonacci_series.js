'use strict';

function fibonacci_series(n) {
    var result = [0, 1];

    if (n == 1) {
        return result;
    }
    else {
        for (var i = 2; i < n + 1; i++) {
            result[i] = result[i - 2] + result[i - 1];
        }
    }
    return result;
}

module.exports = fibonacci_series;
