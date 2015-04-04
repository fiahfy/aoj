process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    var args = chunk.split(' ').map(Number);
    var result = args.sort(function(a, b) {
        return a - b;
    });
    console.log(result.join(' '));
});
