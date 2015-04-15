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

function primeNumbersInForEratosthenes(x) {
    var a = {};
    for (var i = 2; i <= x; i++) {
        a[i] = 1;
    }

    var n = 2;
    do {
        for (var i = n * 2; i <= x; i += n) {
            if (i in a) {
                delete a[i];
            }
        }
        var m = x;
        for (i in a) {
            i = Number(i);
            if (n < i && i < m) {
                m = i;
            }
        }
        n = m;
    } while (n <= Math.sqrt(x))
    return Object.keys(a).map(Number);
}

function primeNumbersIn(x) {
    var array = [];
    for (var i = 2; i <= x; i++) {
        if (isPrimeNumber(i)) {
            array.push(i);
        }
    }
    return array
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
