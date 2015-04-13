(function(input) {
    var p = input.replace(/\n$/, '').split('\n');
    for (var i = 0; i < p.length; i++) {
        var args = p[i].split(' ').map(Number);
        var sum = args.reduce(function(a, b) {
            return a + b;
        });
        console.log(String(sum).length);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
