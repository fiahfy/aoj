//var insertionSort = require('../../modules/sort');
var shellSort = require('../../modules/sort').shellSort;

(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var a = p.shift().split(' ').map(Number);
    shellSort(a, [4, 1]);
    console.log(a);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

