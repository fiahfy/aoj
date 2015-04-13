(function(input) {
    var p = input.split('\n');
    for (var i = 0; i < p.length; i++) {
        var s = p[i].split(' ').map(Number);
        if (s[0] === -1 && s[1] === -1 && s[2] === -1) {
            return;
        }
        console.log(rank(s[0], s[1], s[2]));
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function rank(m, f, r) {
    var s = m + f;
    if (m < 0 || f < 0) {
        s = 0;
    }
    if (s< 30) {
        return 'F';
    }
    if (s < 50) {
        if (r < 50) {
            return 'D';
        }
        return 'C';
    }
    if (s < 65) {
        return 'C';
    }
    if (s < 80) {
        return 'B';
    }
    return 'A';
}
