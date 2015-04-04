(function(input) {
    var a = input.split('\n');
    while (true) {
        var c = a.shift();
        if (c === '-') {
            return;
        }
        var n = Number(a.shift());
        for (var i = 0; i < n; i++) {
            var h = Number(a.shift());
            c = shuffle(c, h);
        }
        console.log(c);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function shuffle(c, h) {
    return c.slice(h, c.length) + c.slice(0, h);
}
