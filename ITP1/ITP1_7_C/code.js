(function(input) {
    var a = parse(input);
    a = a.map(function(e) { return e.map(Number); });
    a.shift();
    for (var i = 0; i < a.length; i++) {
        var r = a[i];
        var s = 0;
        for (var j = 0; j < r.length; j++) {
            s += r[j];
        }
        a[i].push(s);
    }
    var rs = [];
    for (var i = 0; i < a[0].length; i++) {
        var s = 0;
        for (var j = 0; j < a.length; j++) {
            s += a[j][i];
        }
        rs.push(s);
    }
    a.push(rs);
    console.log(build(a));

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
