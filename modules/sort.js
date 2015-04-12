function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var tmp = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > tmp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = tmp;
    }
}

function bubbleSort(array) {
    var flag = true;
    while (flag) {
        flag = false;
        for (var i = array.length - 1; i >= 1; i--) {
            if (array[i] < array[i - 1]) {
                var tmp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = tmp;
                flag = true;
            }
        }
    }
}

function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var minj = i;
        for (var j = i; j < array.length; j++) {
            if (array[j] < array[minj]) {
                minj = j;
            }
        }
        if (minj !== i) {
            var tmp = array[i];
            array[i] = array[minj];
            array[minj] = tmp;
        }
    }
}

function shellSort(array, g) {
    for (var i = 0; i < g.length; i++) {
        shellSortSub(array, g[i]);
    }

    function shellSortSub(array, g) {
        for (var i = g; i < array.length; i++) {
            var tmp = array[i];
            var j = i - g;
            while (j >= 0 && array[j] > tmp) {
                array[j + g] = array[j];
                j -= g;
            }
            array[j + g] = tmp;
        }
    }
}

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
                array[k] = rightArray[j];
                j++;
            }
        }
    }
}

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

module.exports = {
    insertionSort: insertionSort,
    bubbleSort: bubbleSort,
    selectionSort: selectionSort,
    shellSort: shellSort,
    mergeSort: mergeSort,
    countingSort: countingSort
};
