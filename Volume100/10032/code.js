(function(input) {
    var p = input.split('\n');
    var array = [];
    while (true) {
        var commands = p.shift().split(' ');
        var command = commands[0];
        var arg = commands[1];
        if (command === 'quit') {
            return;
        }
        if (command === 'push') {
            array.push(arg);
        } else {
            console.log(array.pop());
        }
    }
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
