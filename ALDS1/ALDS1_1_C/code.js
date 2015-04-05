(function(input) {
    var p = input.split('\n').map(Number);
    var n = p.shift();
    var a = p.slice(0, n);
    var pns = primeNumbers(a);
    console.log(pns.length);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

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
    var a = [];
    var ds = divisors(x);
    for (var i = 0; i < ds.length ; i++) {
        var d = ds[i];
        if (y % d === 0) {
            a.push(i);
        }
    }
    return a;
}

function divisors(x) {
    var a = [];
    for (var i = 1; i <= x; i++) {
        if (x % i === 0) {
            a.push(i);
        }
    }
    return a;
}

function isPrimeNumber(x) {
    if (x < 2) {
        return false;
    }
    for (var i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function inArray(needle, heystack) {
    return heystack.indexOf(needle) !== -1;
}

function primeNumbers(x) {
    var a = {};
    for (var i = 2; i <= Math.sqrt(Math.max.apply(null, x)); i++) {
        a[i] = 1;
    }
    var d = {};
    for (var i = 0; i < x.length; i++) {
        var y = x[i];
        d[y] = 1;
    }

    var n = 2;
    do {
        for (var i = n * 2; i <= Math.sqrt(Math.max.apply(null, x)); i += n) {
            if (a[i] === 1) {
                delete a[i];
            }
        }
        for (var i in d) {
            if (Number(i) % n === 0 && Number(i) !== n) {
                delete d[i];
            }
        }
        var m = Math.max.apply(null, x);
        for (var i in a) {
            if (i > n && i < m) {
                m = Number(i);
            }
        }
        n = m;
    } while (n <= Math.sqrt(Math.max.apply(null, x)))
    return Object.keys(d).map(Number);
}
