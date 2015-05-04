(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var n = Number(p.shift());
  for (var i = 0; i < n; i++) {
    var a = p.shift().split(' ').map(Number);
    console.log(order(a));
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function order(a) {
  var r = [];
  var x;
  var c = a.shift();
  while (x = a.shift()) {
    if (x > c) {
      c = x;
      continue;
    }
    r.push(x);
  }
  var m = - Infinity;
  while (x = r.shift()) {
    if (x > m) {
      m = x;
      continue;
    }
    return 'NO';
  }
  return 'YES';
}