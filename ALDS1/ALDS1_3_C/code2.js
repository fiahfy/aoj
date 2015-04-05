var util = require('../../modules/util');

(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var commands = p.slice(0, n);
    var linkedList = new util.LinkedList();

    commands.forEach(function(e) {
        execCommand(linkedList, e);
    });

    console.log(linkedList.toArray().join(' '));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function execCommand(linkedList, c) {
    var a = c.split(' ');
    var command = a.shift();
    var arg = Number(a.shift());
    switch (command) {
        case 'insert':
            linkedList.addFirst(arg);
            break;
        case 'delete':
            linkedList.remove(arg);
            break;
        case 'deleteFirst':
            linkedList.removeFirst();
            break;
        case 'deleteLast':
            linkedList.removeLast();
            break;
    }
    return linkedList;
}
