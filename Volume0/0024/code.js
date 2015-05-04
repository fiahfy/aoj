(function(input) {
  var p = input.replace(/\n$/, '').split('\n').map(Number);
  var n = p.length;
  var G = 9.8;
  for (var i = 0; i < n; i++) {
    var mv = p.shift();
    var t = mv / G;
    var N = (G / 2 * t * t + 5) / 5;
    console.log(Math.ceil(N));
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
