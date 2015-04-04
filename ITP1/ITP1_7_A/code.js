(function(input) {
    var a = parse(input);
    a = a.map(function(e) { return e.map(Number); });
    for (var i = 0; i < a.length; i++) {
        var s = a[i];
        var m = s[0];
        var f = s[1];
        var r = s[2];
        if (m === -1 && f === -1 & r === -1) {
            return;
        }
        console.log(rank(m, f, r));
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function parse(str, sep, ter) {
    sep = sep || ' ';
    ter = ter || '\n';
    str = str.replace(/\n$/, '');
    var a = str.split(ter);
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].split(sep);
    }
    return a;
}

function rank(m, f, r) {
    var s = m + f;
    if (m < 0 || f < 0) {
        s = 0;
    }
    if (s< 30) {
        return 'F';
    }
    if (s < 50) {
        if (r < 50) {
            return 'D';
        }
        return 'C';
    }
    if (s < 65) {
        return 'C';
    }
    if (s < 80) {
        return 'B';
    }
    return 'A';
}
