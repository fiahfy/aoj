(function(input) {
    var p = input.split('\n');
    while (true) {
        var str = p.shift();
        if (str === '-') {
            break;
        }
        var n = Number(p.shift());
        for (var i = 0; i < n; i++) {
            var h = Number(p.shift());
            str = shuffle(str, h);
        }
        console.log(str);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function shuffle(str, h) {
    return str.slice(h, str.length) + str.slice(0, h);
}
