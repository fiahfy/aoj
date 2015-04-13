(function(input) {
    var str = input;

    var alphabets = [];
    for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        alphabets[String.fromCharCode(i)] = 0;
    }

    str.split('').forEach(function(e) {
        e = e.toLowerCase();
        if (e in alphabets) {
            alphabets[e]++;
        }
    });

    console.log(Object.keys(alphabets).map(function(key) {
        return key + ' : ' + this[key];
    }, alphabets).join('\n'));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
