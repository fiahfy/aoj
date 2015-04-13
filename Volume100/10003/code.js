(function(input) {
    var p = input.split(' ').map(Number);
    var a = p[0];
    var b = p[1];
    var o;
    if (a < b) {
        o = '<';
    } else if (a > b) {
        o = '>';
    } else {
        o = '==';
    }
    console.log('a %s b', o);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
