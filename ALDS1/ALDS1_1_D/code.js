(function(input) {
    var p = input.split('\n').map(Number);
    var n = p.shift();
    var a = p.slice(0, n);

    var max = -Infinity;
    var min = Infinity;
    for (var i = 0; i < a.length; i++) {
        max = Math.max(max, a[i] - min);
        min = Math.min(min, a[i]);
    }
    console.log(max);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
