/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            pivotIndex++;
            const temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;
        }
    }

    const temp = arr[start];
    arr[start] = arr[pivotIndex];
    arr[pivotIndex] = temp;

    return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]



module.exports =  {quickSort, pivot};
