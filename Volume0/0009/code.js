(function(input) {
    var p = input.replace(/\n$/, '').split('\n').map(Number);
    for (var i = 0; i < p.length; i++) {
        var n = p[i];
        console.log(count(n));
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function count(n) {
    var count = 0;
    for (var i = 2; i <= n; i++) {
        if (isPrimeNumber(i)) {
            count++;
        }
    }
    return count;
}

function isPrimeNumber(x) {
    if (x === 2) {
        return true;
    } else if (x % 2 === 0) {
        return false;
    }
    var n = 3;
    while (n <= Math.sqrt(x)) {
        if (x % n === 0) {
            return false;
        }
        n += 2;
    }
    return true;
}
