(function(input) {
    var p = input.replace(/\n$/, '').split('\n');
    for (var i = 0; i < p.length; i++) {
        var args = p[i].split(' ').map(Number);
        var a = args[0];
        var b = args[1];
        var c = args[2];
        var d = args[3];
        var e = args[4];
        var f = args[5];
        var x = (c * e - b * f) / (a * e - b * d);
        var y = (c * d - a * f) / (b * d - a * e);
        x = x.toFixed(3);
        y = y.toFixed(3);
        console.log('%s %s', x, y);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
