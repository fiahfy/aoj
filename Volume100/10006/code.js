(function(input) {
    var p = input.split('\n').map(Number);
    for (var i = 0; i < p.length; i++) {
        var x = p[i];
        if (x === 0) {
            return;
        }
        console.log('Case %d: %d', (i + 1), x);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
