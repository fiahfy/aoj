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

module.exports = {
    insertionSort: insertionSort,
    bubbleSort: bubbleSort,
    selectionSort: selectionSort,
    shellSort: shellSort
};
