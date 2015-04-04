(function(input) {
    var p = parse(input);
    p = p.map(function(e) { return e.map(Number); });
    var i = p.shift();
    var n = i[0];
    var m = i[1];
    var l = i[2];

    var a = p.slice(0, n);
    var b = p.slice(n, n + m);

    var c = array(n, l);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < l; j++) {
            c[i][j] = 0;
            for (var k = 0; k < m; k++) {
                c[i][j] += a[i][k]* b[k][j];
            }
        }
    }
    console.log(build(c));
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

function build(a, sep, ter) {
    sep = sep || ' ';
    ter = ter || '\n';
    var lines = [];
    for (var i = 0; i < a.length; i++) {
        lines.push(a[i].join(sep));
    }
    return lines.join(ter);
}

function array(i, j) {
    var a = [];
    for (var n = 0; n < i; n++) {
        a.push(Array(j));
    }
    return a;
}
