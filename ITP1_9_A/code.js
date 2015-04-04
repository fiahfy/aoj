(function(input) {
    var a = parse(input);
    var w = a[0][0];
    a.shift();
    var ws = {};
    for (var i = 0; i < a.length; i++) {
        var l = a[i];
        for (var j = 0; j < l.length; j++) {
            var s = l[j];
            if (s == 'END_OF_TEXT') {
                break;
            }
            s = s.toLowerCase();
            if (s in ws) {
                ws[s]++;
                continue;
            }
            ws[s] = 1;
        }
    }
    console.log(ws[w]);
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
