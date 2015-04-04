(function(input) {
    var a = parse(input);
    a = a.map(function(e) { return e.map(Number); });
    var n = a[0][0];
    var m = a[0][1];
    a.shift();

    var aa = a.slice(0, n);
    var b = a.slice(n, n + m).map(function(e) { return e[0]; });

    var c = [];
    for (var i = 0; i < n; i++) {
        var r = 0;
        for (var j = 0; j < m; j++) {
            r += aa[i][j] * b[j];
        }
        c.push(r);
    }
    console.log(c.join('\n'));
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
