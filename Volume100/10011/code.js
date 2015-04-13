(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var a = p.shift().split(' ').map(Number);
    console.log(a.reverse().join(' '));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
