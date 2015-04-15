(function(input) {
    var str = input.replace(/\n$/, '');
    console.log(str.split('').reverse().join(''));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
