(function(input) {
    var a = parse(input, '');
    for (var i = 0; i < a.length; i++) {
        var n = a[i].map(Number);
        if (n.join() == '0') {
            return;
        }
        console.log(n.reduce(function(p, c) {
            return p + c;
        }))
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function parse(str, sep, ter) {
    sep = typeof(sep) !== 'undefined' ? sep : ' ';
    ter = typeof(ter) !== 'undefined' ? ter : '\n';
    str = str.replace(/\n$/, '');
    var a = str.split(ter);
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].split(sep);
    }
    return a;
}
