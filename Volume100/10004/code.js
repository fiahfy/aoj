(function(input) {
    var p = input.split(' ').map(Number);
    p.sort(function(a, b) {
        return a - b;
    });
    console.log(p.join(' '));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
