process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    var args = chunk.split(' ').map(Number);
    var w = args[0];
    var h = args[1];
    var x = args[2];
    var y = args[3];
    var r = args[4];
    console.log('%s', 0 <= x - r && x + r <= w && 0 <= y - r && y + r <= h ? 'Yes' : 'No');
});
