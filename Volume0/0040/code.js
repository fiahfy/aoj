(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var n = Number(p.shift());
  for (var i = 0; i < n; i++) {
    var a = p.shift().split('');
    console.log(conv(a));
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function conv(a) {
  for (vari)
}

function