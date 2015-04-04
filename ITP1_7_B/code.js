(function(input) {
    var a = parse(input);
    a = a.map(function(e) { return e.map(Number); });
    for (var i = 0; i < a.length; i++) {
        var n = a[i][0];
        var x = a[i][1];
        if (n === 0 && x === 0) {
            return;
        }
        console.log(count(n, x));
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

function count(n, x) {
    var c = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = i + 1; j <= n; j++) {
            for (var k = j + 1; k <= n; k++) {
                if (i + j + k === x) {
                    c++;
                }
            }
        }
    }
    return c;
}
