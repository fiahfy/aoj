(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var n = p.length;
  for (var i = 0; i < n; i++) {
    var a = p.shift().split('');
    console.log(count(a));
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function count(a) {
  var l = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var c = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  var s = 0;
  for (var i = 0; i < a.length; i++) {
    if (i < a.length - 1 && l.indexOf(a[i]) < l.indexOf(a[i + 1])) {
      s -= c[a[i]];
    } else {
      s += c[a[i]];
    }
  }
  return s;
}
