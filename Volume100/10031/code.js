(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var S = p.shift().split(' ', n).map(Number);
    var q = Number(p.shift());
    var T = p.shift().split(' ', q).map(Number);

    var h = {};
    S.forEach(function(e) {
        h[e] = 1;
    });
    var count = 0;
    T.forEach(function(e) {
        if (e in h) {
            count++;
        }
    });
    console.log(count);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
