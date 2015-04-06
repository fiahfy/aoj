(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var commands = p.slice(' ', n);
    var dic = {};
    commands.forEach(function(e) {
        execCommand(dic, e);
    });
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function execCommand(dic, c) {
    var a = c.split(' ');
    var command = a.shift();
    var key = a.shift();
    if (command === 'insert') {
        dic[key] = 1;
    } else if (command === 'find') {
        console.log(key in dic ? 'yes' : 'no');
    }
}