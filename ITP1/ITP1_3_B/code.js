var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    var lines = input.split('\n').map(Number);
    for (var i = 0; i < lines.length && lines[i] != 0; i++) {
        console.log('Case %d: %d', i + 1, lines[i]);
    }
});
