(function(input) {
    var p = input.split('\n');
    while (true) {
        var a = p.shift().split(' ').map(Number);
        var H = a[0];
        var W = a[1];
        if (H === 0 && W === 0) {
            return;
        }
        console.log(
            Array(W + 1).join('#') + '\n'
            + Array(H - 1).join('#' + Array(W - 1).join('.') + '#\n')
            + Array(W + 1).join('#') + '\n'
        );
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
