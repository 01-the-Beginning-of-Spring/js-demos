'use strict';

function sum(a, b) {
    var sum = 0;
    for( var i = a; i<=b; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sum;
