(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var cs = p.slice(0, n);
    var cards = makeCards();
    for (var i = 0; i < cs.length; i++) {
        delete cards[cs[i]];
    }
    if (Object.keys(cards) == 0) {
        return;
    }
    console.log(Object.keys(cards).join('\n'));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function makeCards() {
    var ts = ['S', 'H', 'C', 'D'];
    var a = [];
    for (var i = 0; i < ts.length; i++) {
        var t = ts[i];
        for (var j = 1; j <= 13; j++) {
            a[t + ' ' + j] = 1;
        }
    }
    return a;
}
