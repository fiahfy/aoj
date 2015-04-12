var c = 0;

(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());

    console.log(getKochCurve({x: 0, y: 0}, {x: 100, y: 0}, n).map(function(p) {
        return p.x + ' ' + p.y;
    }).join('\n'));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function getKochCurvePoints(p1, p2) {
    var s = {};
    var t = {};
    var u = {};
    s.x = ((2 * p1.x + p2.x) / 3).toFixed(6) - 0;
    s.y = ((2 * p1.y + p2.y) / 3).toFixed(6) - 0;
    t.x = ((p1.x + 2 * p2.x) / 3).toFixed(6) - 0;
    t.y = ((p1.y + 2 * p2.y) / 3).toFixed(6) - 0;
    u.x = ((t.x - s.x) * Math.cos(60 / 180 * Math.PI) - (t.y - s.y) * Math.sin(60 / 180 * Math.PI) + s.x).toFixed(6) - 0;
    u.y = ((t.x - s.x) * Math.sin(60 / 180 * Math.PI) + (t.y - s.y) * Math.cos(60 / 180 * Math.PI) + s.y).toFixed(6) - 0;
    return [s, u, t];
}

function getKochCurve(p1, p2, n) {
    if (n == 0) {
        return [p1, p2];
    }
    var p = getKochCurvePoints(p1, p2);
    p.unshift(p1);
    p.push(p2);
    n--;
    var points = [];
    for (var i = 0; i < p.length - 1; i++) {
        var s = p[i];
        var e = p[i + 1];
        points = points.concat(getKochCurve(s, e, n));
        points.pop();
    }
    points.push(p2);
    return points;
}
