(function(input) {
    var p = input.split('\n');
    var W = p.shift();
    var count = 0;
    while (true) {
        var seq = p.shift();
        if (seq === 'END_OF_TEXT') {
            break;
        }
        var words = seq.split(' ');
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (W === word.toLowerCase()) {
                count++;
            }
        }
    }
    console.log(count);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
