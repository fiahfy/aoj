(function(input) {
    inputs = input.split(' ').map(Number);
    var r = inputs[0];
    var a = (r * r * Math.PI).toFixed(5);
    var c = (2 * r * Math.PI).toFixed(5);
    console.log('%d %d', a, c);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
