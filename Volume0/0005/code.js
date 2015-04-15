(function(input) {
    var p = input.replace(/\n$/, '').split('\n');
    for (var i = 0; i < p.length; i++) {
        var args = p[i].split(' ').map(Number);
        var a = args[0];
        var b = args[1];
        var gcd = greatestCommonDivisor(a, b);
        var lcm = leastCommonMultiple(a, b);
        console.log('%s %s', gcd, lcm);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function greatestCommonDivisor(a, b) {
    if (b > a) {
        b = [a, a = b][0];
    }
    if (b == 0) {
        return a;
    }
    return greatestCommonDivisor(a % b, b);
}

function leastCommonMultiple(a, b) {
    return a * b / greatestCommonDivisor(a, b);
}
