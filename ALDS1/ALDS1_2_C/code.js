(function(input) {
    var p = input.split('\n');
    var n = p.shift();
    var a = p.shift().split(' ', n);
    var c1 = [].concat(a);
    var c2 = [].concat(a);
    sortBubble(c1);
    console.log(check(c1, a) ? 'Stable' : 'Not stable');
    sortSelection(c2);
    console.log(check(c2, a) ? 'Stable' : 'Not stable');
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function getNumber(a) {
    return Number(a.slice(1, a.length));
}

function getWords(a, n) {
    var r = '';
    for (var i = 0; i < a.length; i++) {
        if (getNumber(a[i]) === n) {
            r += a[i];
        }
    }
    return r;
}

function sortBubble(a) {
    var count = 0;
    var flag = true;
    while (flag) {
        flag = false;
        for (var i = a.length - 1; i >= 1; i--) {
            if (getNumber(a[i]) < getNumber(a[i - 1])) {
                var tmp = a[i];
                a[i] = a[i - 1];
                a[i - 1] = tmp;
                flag = true;
                count++
            }
        }
    }
    console.log(a.join(' '));
    //console.log(count);
}

function sortSelection(a) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        var min = i;
        for (var j = i; j < a.length; j++) {
            if (getNumber(a[j]) < getNumber(a[min])) {
                min = j;
            }
        }
        if (min !== i) {
            var tmp = a[i];
            a[i] = a[min];
            a[min] = tmp;
            count++;
        }
    }
    console.log(a.join(' '));
    //console.log(count);
}

function check(c, a) {
    var i = 0;
    while (i < a.length) {
        var n = getNumber(c[i]);
        if (getWords(c, n) !== getWords(a, n)) {
            return false;
        }

        i++;
    }
    return true;
}
