(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var n = p.length;
  var r = [0, 0];
  for (var i = 0; i < n; i++) {
    var a = p.shift().split(',').map(Number);
    var x1 = a.shift();
    var x2 = a.shift();
    var x3 = a.shift();
    if (x3 * x3 === x1 * x1 + x2 * x2) {
      r[0]++;
    } else if (x1 === x2) {
      r[1]++;
    }
  }
  console.log('%s\n%s', r[0], r[1]);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
