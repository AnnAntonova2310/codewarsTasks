function flattenAndSort(array) {
    array = array.reduce(function (acc, a) {
        return acc.concat(a);
    }, []);

    return array.sort(function (a, b) {
        return a - b;
    });
}

flattenAndSort();