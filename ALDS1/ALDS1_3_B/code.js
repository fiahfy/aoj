(function(input) {
    var p = input.split('\n');
    var def = p.shift().split(' ').map(Number);
    var n = def[0];
    var q = def[1];
    var ps = p.slice(0, n);
    var queue = [];
    for (var i = 0; i < ps.length; i++) {
        var pss = ps[i].split(' ');
        queue.push({
            id: pss[0], time: Number(pss[1])
        })
    }
    var t = 0;
    while (queue.length > 0) {
        var pss = queue.shift();
        if (pss.time > q) {
            pss.time -= q;
            queue.push(pss);
            t += q;
            continue;
        }
        t += pss.time;
        console.log('%s %d', pss.id, t);
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
