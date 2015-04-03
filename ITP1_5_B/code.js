(function(input) {
    var lines = input.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var items = lines[i].split(' ').map(Number);
        var h = items[0];
        var w = items[1];
        if (!h && !w) {
            break;
        }
        console.log(
            Array(w + 1).join('#') + '\n' +
            Array(h - 1).join('#' + Array(w - 1).join('.') + '#\n') +
            Array(w + 1).join('#') + '\n'
        );
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
