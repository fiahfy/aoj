process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    var args = chunk.split(' ').map(Number);
    var length = args[0];
    var width = args[1];
    var area = length * width;
    var perimeter = 2 * (length + width);
    console.log(area, perimeter);
});
