(function(input) {
    var a = parse(input, ',');
    var cards = makeCards();
    for (var i = 1; i < a.length; i++) {
        var c = a[i][0];
        delete cards[c];
    }
    if (Object.keys(cards) == 0) {
        return;
    }
    console.log(Object.keys(cards).join('\n'));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function parse(str, sep, ter) {
    sep = sep || ' ';
    ter = ter || '\n';
    str = str.replace(/\n$/, '');
    var a = str.split(ter);
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].split(sep);
    }
    return a;
}

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
