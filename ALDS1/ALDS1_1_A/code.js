(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var a = p.shift().split(' ').map(Number);
    a = sortInsertion(a);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function sortInsertion(a) {
    console.log(a.join(' '));
    for (var i = 1; i < a.length; i++) {
        var v = a[i];
        var j = i - 1;
        while (j >= 0 && a[j] > v) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = v;
        console.log(a.join(' '));
    }
}
