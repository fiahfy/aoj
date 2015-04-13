(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var words = p.slice(0, n);
    words = words.sort();
    console.log(words[0]);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
