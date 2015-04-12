var c = 0;

(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var A = p.shift().split(' ').map(Number);

    //var count = 0;
    //var max = -Infinity;
    //for (var i = 0; i < A.length; i++) {
    //    max = Math.max(max, A[i]);
    //    if (A[i] < max) {
    //        count++;
    //    }
    //}
    mergeSort(A, 0, A.length);
    console.log(c);
    //console.log(A);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function mergeSort(array, left, right) {
    if (left + 1 < right) {
        var mid = Math.floor((left + right) / 2);
        mergeSort(array, left, mid);
        mergeSort(array, mid, right);
        mergeSortSub(array, left, mid, right);
    }

    function mergeSortSub(array, left, mid, right) {
        var n1 = mid - left;
        var n2 = right - mid;
        var leftArray = [];
        var rightArray = [];
        for (var i = 0; i < n1; i++) {
            leftArray.push(array[left + i]);
        }
        for (var i = 0; i < n2; i++) {
            rightArray.push(array[mid + i]);
        }
        leftArray.push(Infinity);
        rightArray.push(Infinity);
        var i = j = 0;
        for (var k = left; k < right; k++) {
            if (leftArray[i] <= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            } else {
                c += (leftArray.length - 1  - i);
                array[k] = rightArray[j];
                j++;
            }
        }
        //console.log(array);
    }
}
