(function(input) {
    var a = parse(input);
    var n = Number(a[0][0]);
    var an = a[1].map(Number).reverse();
    console.log(an.join(' '));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function parse(str, sep, ter) {
    sep = sep || ' ';
    ter = ter || '\n';
    str = str.replace(/\n$/, '');
    var a = str.split(ter);
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].split(sep);
    }
    return a;
}
