(function(input) {
    var p = input.replace(/\n$/, '').split(' ');
    console.log(calc(p));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function calc(a) {
    var stack = [];
    for (var i = 0; i < a.length; i++) {
        var n = a[i];
        //console.log(n);
        if (isNaN(n)) {
            var str = stack.pop();
            str = stack.pop() + ' ' + n + ' ' + str;
            //console.log(str);
            var acm = eval(str);
            //console.log(acm);
            stack.push(acm);
            continue;
        }
        stack.push(Number(n));
    }
    return stack.pop();
}
