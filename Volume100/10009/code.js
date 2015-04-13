(function(input) {
    var r = Number(input);
    var area = (r * r * Math.PI).toFixed(6);
    var circumference = (2 * r * Math.PI).toFixed(6);
    console.log('%d %d', area, circumference);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
