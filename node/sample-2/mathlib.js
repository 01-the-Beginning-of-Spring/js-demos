'use strict';

function sum(a, b) {
    if((!!a) || (!!b) ) {
        return 0;
    }
    var sum = 0;
    for(var i = a; i<=b; i++ ) {
        sum += i;
    }
    return sum;
}

function max(a,b) {
    return a>b?a:b;
}

module.exports = {
    sum: sum,
    max: max
}