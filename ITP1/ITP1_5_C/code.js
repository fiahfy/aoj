(function(input) {
    var lines = input.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var items = lines[i].split(' ').map(Number);
        var h = items[0];
        var w = items[1];
        if (!h && !w) {
            break;
        }
        var r = '';
        for (var y = 1; y <= h; y++) {
            for (var x = 1; x <= w; x++) {
                r += y % 2 && x % 2 || !(y % 2) && !(x % 2) ? '#' : '.';
            }
            r += '\n';
        }
        console.log(r);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
