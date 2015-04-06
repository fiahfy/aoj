(function(input) {
    console.info = function(){};

    var p = input.split('\n');
    var args = p.shift().split(' ').map(Number);
    var n = args[0];
    var k = args[1];
    var w = p.slice(0, n).map(Number);
    var weights = w;
    var len = weights.length

    var sumWeight = w.reduce(function(a, b) { return a + b; });
    var P = Math.ceil(sumWeight / k);
    //P = Math.max.apply(null, w);
    //console.info(w);return;
    while (1) {
        var M = P * k - sumWeight;
        //console.log('P = ' + P);
        console.info('k = ' + k);
        console.info('sum weight = ' + sumWeight);
        console.info('M = ' + M);
        var total = 0;
        var j = 0;
        for (var i = 0; i < k; i++) {
            console.info('##kIndex = ' + i);
            var kWeight = 0;
            for (; j < len; j++) {
                var wts = weights[j];
                console.info('####current weight = ' + wts);
                if (kWeight + wts <= P) {
                    console.info('######put weight = ' + wts);
                    kWeight += wts;
                    //weights = weights.slice(0, j).concat(weights.slice(j + 1, weights.length));
                    //j--;
                } else {
                    //weights = weights.slice(j, weights.length);
                    break;
                }
            }
            M -= (P - kWeight);
            console.info('##kWeight = ' + kWeight);
            console.info('##current M = ' + M);
            if (M < 0) {
                break;
            }
            total += kWeight;
        }
        console.info('');
        console.info('M = ' + M);
        //console.info('weight leng = ' + weights.length);
        if (M >= 0 && total == sumWeight) {
            console.info('ok');
            console.info('P = ' + P);
            console.log(P);
            break;
        }
        console.info('NG');
        console.info('####################');
        P++;
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
