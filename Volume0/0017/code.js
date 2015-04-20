(function(input) {
  var inputs = input.replace(/\n$/, '').split('\n');
  while (true) {
    p = inputs.shift();
    if (!p) {
      return;
    }
    n = 0;
    while (true) {
      var str = convert(p, ++n);
      if (check(str, n)) {
        console.log(str);
        break;
      }
    }
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function convert(p, n) {
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return p.split('').map(function(e) {
    var index = alphabets.indexOf(e);
    if (index < 0) {
      return e;
    }
    index += n;
    if (index >= alphabets.length) {
      index -= alphabets.length;
    }
    return alphabets[index];
  }).join('');
}

function check(p) {
  return p.split(' ').some(function(e) {
    return ['the', 'this', 'that'].indexOf(e) >= 0;
  });
}
