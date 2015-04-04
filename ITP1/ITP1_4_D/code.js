(function(input) {
    var lines = input.split('\n');
    var n = Number(lines[0]);
    var items = lines[1].split(' ').map(Number);
    var min = Infinity, max = -Infinity, sum = 0;
    for (var i = 0; i < items.length; i++) {
        var a = items[i];
        if (a < min) {
            min = a;
        }
        if (a > max) {
            max = a;
        }
        sum += a;
    }
    console.log('%d %d %d', min, max, sum)
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
