(function(input) {
    var n = Number(input);
    var a = [];
    for (var i = 1; i <=n; i++) {
        if (i % 3 === 0) {
            a.push(i);
            continue;
        }
        var x = i;
        do {
            if (x % 10 === 3) {
                a.push(i);
                break;
            }
            x = Math.floor(x / 10);
        } while (x)
    }
    console.log(' ' + a.join(' '));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
