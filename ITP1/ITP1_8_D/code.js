(function(input) {
    var a = input.split('\n');
    var s = a[0];
    s += s;
    var p = a[1];
    console.log(s.search(p) >= 0 ? 'Yes' : 'No');
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
