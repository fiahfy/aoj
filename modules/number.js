function greatestCommonDevisor(x, y) {
    return Math.max.apply(null, commonDevisors(x, y));
}

function commonDevisors(x, y) {
    if (x > y) {
        x = x % y;
    } else if (x < y) {
        var tmp = y;
        y = x;
        x = tmp % x;
    }
    var array = [];
    for (var i = 1; i <= x; i++) {
        if (x % i === 0 && y % i === 0) {
            array.push(i);
        }
    }
    return array;
}

function divisors(x) {
    var array = [];
    for (var i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            array.push(i);
        }
    }
    return array;
}

function primeNumbersIn(x) {
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
