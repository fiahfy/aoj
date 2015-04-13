(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var turns = p.slice(0, n);
    var t = h = 0;
    for (var i = 0; i < turns.length; i++) {
        var cards = turns[i].split(' ');
        if (cards[0] > cards[1]) {
            t += 3;
        } else if (cards[1] > cards[0]) {
            h += 3;
        } else {
            t++;
            h++;
        }
    }
    console.log('%s %s', t, h);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
