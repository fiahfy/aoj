(function(input) {
    var p = input.split('\n');
    var n = p.shift();
    var a = p.shift().split(' ', n).map(Number);
    sortSelection(a);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function sortSelection(a) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        var min = i;
        for (var j = i; j < a.length; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }
        if (min !== i) {
            var tmp = a[i];
            a[i] = a[min];
            a[min] = tmp;
            count++;
        }
    }
    console.log(a.join(' '));
    console.log(count);
}
