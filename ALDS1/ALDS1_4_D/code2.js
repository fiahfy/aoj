(function(input) {
    var p = input.split('\n');
    var args = p.shift().split(' ').map(Number);
    var n = args[0];
    var k = args[1];
    var weights = p.slice(0, n).map(Number);

    var sumWeight = weights.reduce(function(a, b) { return a + b; });
    var P = Math.ceil(sumWeight / k);

    var l = 0;
    var left = P / 2;
    var right = P * 2;
    while (right - left > 1) {
        //console.log(left, right);
        var m = (right + left)/2;
        var i = getWeightCount(m, k, weights);
        //console.log(i, m, n);

        if (i >= n) {
            right = m;
        } else {
            left = m;
        }

    }

    console.log(Math.floor(right));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function getWeightCount(P, k, weights) {
    var count = 0;

    var i = 0;
    for (var j = 0; j < k; j++) {
        var kWeight = 0;
        for (; i < weights.length; i++) {
            if (kWeight + weights[i] <= P) {
                kWeight += weights[i];
                count++;
            } else {
                break;
            }
        }
    }

    return count;
}
