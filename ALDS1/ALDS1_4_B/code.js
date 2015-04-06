(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var s = p.shift().split(' ', n).map(Number);
    var q = Number(p.shift());
    var t = p.shift().split(' ', q).map(Number);

    var c = 0;
    for (var i = 0; i < t.length; i++) {
        if (s.indexOf(t[i]) !== -1) {
            c++;
        }
    }
    console.log(c);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
