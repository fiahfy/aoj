(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var nums = p.shift().split(' ', n).map(Number);
    nums.sort(function(a, b) {
        return a - b;
    });
    console.log(nums.join(' '));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
