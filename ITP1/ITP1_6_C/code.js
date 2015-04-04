(function(input) {
    var a = parse(input);
    a = a.map(function(e) { return e.map(Number); });
    var rooms = makeRooms();
    for (var i = 1; i < a.length; i++) {
        var args = a[i];
        var b = args[0];
        var f = args[1];
        var r = args[2];
        var v = args[3];
        rooms[b - 1][f - 1][r - 1] += v;
    }
    for (var i = 0; i < rooms.length; i++) {
        if (i !== 0) {
            console.log(Array(21).join('#'));
        }
        var b = rooms[i];
        for (var j = 0; j < b.length; j++) {
            var f = b[j];
            console.log(' ' + f.join(' '));
        }
    }
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

function makeRooms() {
    a = [];
    for (var i = 0; i < 4; i++) {
        var b = [];
        for (var j = 0; j < 3; j++) {
            var f = [];
            for (var k = 0; k < 10; k++) {
                f.push(0);
            }
            b.push(f);
        }
        a.push(b);
    }
    return a;
}
