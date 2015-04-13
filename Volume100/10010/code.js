(function(input) {
    var p = input.split('\n');
    while (true) {
        var l = p.shift();
        if (l.match(/\?/)) {
            return;
        }
        console.log(Math.floor(eval(l)));
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
