(function(input) {
    var a = input.split('\n');
    var s = a.shift();
    var n = Number(a.shift());
    var i = 0;
    while (i++ < n) {
        var c = a.shift().split(' ');
        s = command(s, c);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function command(s, c) {
    var com = c.shift();
    switch (com) {
        case 'print':
            var a = Number(c.shift());
            var b = Number(c.shift());
            console.log(s.slice(a, b + 1));
            break;
        case 'reverse':
            var a = Number(c.shift());
            var b = Number(c.shift());
            s = s.slice(0, a)
            + s.slice(a, b + 1).split('').reverse().join('')
            + s.slice(b + 1, s.length);
            break;
        case 'replace':
            var a = Number(c.shift());
            var b = Number(c.shift());
            var p = c.shift();
            s = s.slice(0, a)
            + p
            + s.slice(b + 1, s.length);
            break;
    }
    return s;
}
