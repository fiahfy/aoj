(function(input) {
  var p = input.replace(/\n$/, '').split(' ');
  var n = p.length;
  var r = [];
  var max = '';
  for (var i = 0; i < n; i++) {
    var x = p.shift();
    if (x.length > max.length) {
      max = x;
    }
    if (x in r) {
      r[x]++;
    } else {
      r[x] = 0;
    }
  }
  var a = [];
  for (i in r) {
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
  console.log('%s %s', a[a.length - 1].join('\n'), max);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
