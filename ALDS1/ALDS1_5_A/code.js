(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var A = p.shift().split(' ', n).map(Number);
    var q = Number(p.shift());
    var m = p.shift().split(' ', q).map(Number);

    for (var i = 0; i < m.length; i++) {
        //console.info("n = " + i);
        console.log(check(A, 0, m[i]) ? 'yes' : 'no');
        //console.info('##########');
    }

})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function check(A, i, m) {
    //console.info("i = " + i);
    //console.info("m = " + m);
    var a = A[i];
    if (m == a) {
        return true;
    }
    if (i == A.length - 1) {
        return false;
    }
    i++;
    if (m < a) {
        return check(A, i, m);
    }
    return check(A, i, m - a) || check(A, i, m);
}
