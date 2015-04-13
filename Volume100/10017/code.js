(function(input) {
    var p = input.split('\n');
    for (var i = 0; i < p.length; i++) {
        var s = p[i].split(' ').map(Number);
        if (s[0] === 0 && s[1] === 0) {
            return;
        }
        console.log(count(s[0], s[1]));
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

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
