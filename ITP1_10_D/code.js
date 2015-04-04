(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var x = p.shift().split(' ', n).map(Number);
    var y = p.shift().split(' ', n).map(Number);
    console.log(distance(x, y, 1));
    console.log(distance(x, y, 2));
    console.log(distance(x, y, 3));
    console.log(distance(x, y, Infinity));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function distance(x, y, p) {
    if (p === Infinity) {
        var m = 0;
        for (var i = 0; i < x.length; i++) {
            var d = Math.abs(x[i] - y[i]);
            if (d > m) {
                m = d;
            }
        }
        return m;
    }
    var s = 0;
    for (var i = 0; i < x.length; i++) {
        s += Math.pow(Math.abs(x[i] - y[i]), p);
    }
    return Math.pow(s, 1 / p);
}
