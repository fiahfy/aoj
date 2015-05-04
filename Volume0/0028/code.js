(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var n = p.length;
  var r = [];
  for (var i = 0; i < n; i++) {
    var x = p.shift();
    if (x in r) {
      r[x]++;
    } else {
      r[x] = 0;
    }
  }
  var a = [];
  for (i = 0; i < r.length; i++) {
    var m = r[i];
    if (isNaN(m)) {
      m = 0;
    }
    if (m in a) {
      a[m].push(i);
    } else {
      a[m] = [i];
    }
  }
  console.log(a[a.length - 1].join('\n'));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
