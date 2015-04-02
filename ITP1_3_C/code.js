var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    var lines = input.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var args = lines[i].split(' ').map(Number);
        if (args[0] == 0 && args[1] == 0) {
            break;
        }
        var result = args.sort(function(a, b) {
            return a - b;
        });
        console.log(result.join(' '));
    }
});
