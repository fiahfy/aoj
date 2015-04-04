var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    var args = input.split(' ').map(Number);
    var a = args[0];
    var b = args[1];
    var c = args[2];
    var x = 0;
    for (var i = a; i <= b; i++) {
        if (c % i == 0) {
            x++;
        }
    }
    console.log(x);
});
