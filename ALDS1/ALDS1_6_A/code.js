(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var A = p.shift().split(' ').map(Number);

    coutingSort(A, 10000);
    console.log(A.join(' '));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function coutingSort(array, k) {
    var counts = [];
    for (var i = 0; i <= k; i++) {
        counts[i] = 0;
    }
    for (var i = 0; i < array.length; i++) {
        counts[array[i]]++;
    }
    for (var i = 1; i <= k; i++) {
        counts[i] = counts[i] + counts[i - 1];
    }
    var results = [];
    for (var i = array.length - 1; i >= 0; i--) {
        results[counts[array[i]]] = array[i];
        counts[array[i]]--;
    }
    for (var i = 1; i < array.length; i++) {
        array[i] = results[i];
    }
}
