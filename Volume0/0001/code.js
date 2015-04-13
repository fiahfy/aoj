(function(input) {
    var p = input.split('\n');
    var heights = p.map(Number).sort(function(a, b) {
        return b - a;
    });
    console.log(heights.slice(0, 3).join('\n'));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
