(function(input) {
    var p = input.split('\n');
    while (true) {
        var a = p.shift().split(' ').map(Number);
        var H = a[0];
        var W = a[1];
        if (H === 0 && W === 0) {
            return;
        }
        var r = '';
        for (var j = 1; j <= H; j++) {
            for (var i = 1; i <= W; i++) {
                r += j % 2 && i % 2 || !(j % 2) && !(i % 2) ? '#' : '.';
            }
            r += '\n';
        }
        console.log(r);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
