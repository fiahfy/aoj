(function(input) {
    var x = Number(input);
    console.log(Math.pow(x, 3));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
