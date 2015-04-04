(function(input) {
    var a = input.split(' ').map(Number);
    console.log(distance(a[0], a[1], a[2], a[3]));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
