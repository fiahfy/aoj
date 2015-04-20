(function(input) {
  var str = input.replace(/\n$/, '');
  console.log(str.toUpperCase());
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
