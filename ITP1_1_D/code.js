process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    var ts = Number(chunk);
    var s = ts % 60;
    var tm = (ts - s) / 60;
    var m = tm % 60;
    var th = (tm - m) / 60;
    var h = th;
    console.log('%d:%d:%d', h, m, s);
});
