(function(input) {
    var n = Number(input.replace(/\n$/, ''));
    var v = 100000;
    for (var i = 1; i <= n; i++) {
        v = add(v);
    }
    console.log(v);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function add(v) {
    v = v * 1.05;
    v = Math.ceil(v / 1000) * 1000;
    return v;
}
