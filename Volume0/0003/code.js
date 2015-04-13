(function(input) {
    var p = input.replace(/\n$/, '').split('\n');
    var n = Number(p.shift());
    for (var i = 0; i < p.length; i++) {
        var args = p[i].split(' ').map(Number).sort(function(a, b) {
            return b - a;
        });
        console.log(
            Math.pow(args[0], 2) === Math.pow(args[1], 2) + Math.pow(args[2], 2)
            ? 'YES' : 'NO'
        );
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
