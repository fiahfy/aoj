process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    var args = chunk.split(' ').map(Number);
    var a = args[0];
    var b = args[1];
    var operator;
    switch (true) {
        case a < b:
            operator = '<';
            break;
        case a > b:
            operator = '>';
            break;
        case a == b:
        default:
            operator = '==';
            break;
    }
    console.log('a %s b', operator);
});
