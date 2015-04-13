(function(input) {
    var p = input.split(' ');
    var x1 = p.shift();
    var y1 = p.shift();
    var x2 = p.shift();
    var y2 = p.shift();
    console.log(distance(x1, y1, x2, y2));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
