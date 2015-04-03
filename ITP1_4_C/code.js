(function(input) {
    var lines = input.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var l = lines[i];
        if (l.match(/\?/)) {
            break;
        }
        var r = Math.floor(eval(l));
        console.log(r);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
