process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    var args = chunk.split(' ').map(Number);
    var a = args[0];
    var b = args[1];
    var c = args[2];
    console.log('%s', a < b && b < c ? 'Yes' : 'No');
});
