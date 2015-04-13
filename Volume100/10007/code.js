(function(input) {
    var p = input.split('\n');
    while (true) {
        var xy = p.shift().split(' ').map(Number);
        if (xy[0] === 0 && xy[1] === 0) {
            return;
        }
        console.log(xy.sort(function(a, b) { return a - b; }).join(' '));
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
