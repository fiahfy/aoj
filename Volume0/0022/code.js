(function(input) {
  var p = input.replace(/\n$/, '').split('\n').map(Number);
  while (true) {
    var n = p.shift();
    if (n === 0) {
      return;
    }
    var i = 0;
    var s = 0;
    var max = -Infinity;
    while (i++ < n) {
      s += p.shift();
      if (s > max) {
        max = s;
      }
    }
    console.log(max);
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
