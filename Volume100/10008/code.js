(function(input) {
    var p = input.split(' ').map(Number);
    var a = p[0];
    var b = p[1];
    var d = Math.floor(a / b);
    var r = a % b;
    var f = (a / b).toFixed(6);
    console.log('%d %d %d', d, r, f);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
