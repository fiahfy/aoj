(function(input) {
    var p = input.split(' ');
    var a = Number(p.shift());
    var b = Number(p.shift());
    var C = Number(p.shift()) / 180 * Math.PI;
    console.log(area(a, b, C));
    console.log(perimeter(a, b, C));
    console.log(height(b, C));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function area(a, b, C) {
    return a * b * Math.sin(C) / 2;
}

function perimeter(a, b, C) {
    return a + b + Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
}

function height(b, C) {
    return b * Math.sin(C);
}
