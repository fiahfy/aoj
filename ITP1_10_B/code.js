(function(input) {
    var p = input.split(' ').map(Number);
    var a = p[0];
    var b = p[1];
    var c = p[2];
    c = c / 180 * Math.PI;
    console.log(area(a, b, c));
    console.log(perimeter(a, b, c));
    console.log(height(b, c));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function area(a, b, c) {
    return a * b * Math.sin(c) / 2;
}

function perimeter(a, b, c) {
    return a + b + Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(c));
}

function height(b, c) {
    return b * Math.sin(c);
}
