(function(input) {
  var p = input.replace(/\n$/, '').split('\n');
  var bt = 0;
  var x = 0;
  var y = 0;
  while (true) {
    var l = p.shift().split(',').map(Number);
    var r = l[0];
    var t = l[1];
    if (r === 0 && t === 0) {
      break;
    }
    x += r * Math.cos(Math.PI * bt / 180);
    y += r * Math.sin(Math.PI * bt / 180);
    bt += t;
  }
  console.log(y > 0 ? Math.floor(y) : Math.ceil(y));
  console.log(x > 0 ? Math.floor(x) : Math.ceil(x));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
