//BUBBLE SORT
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};
function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }
    //if the list isn't in correct order, we'll need to call bubbleSort again to keep sorting
    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

//MERGE SORT
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    //slice the array into 2 halves
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    //sort each half by recursively calling mergeSort
    left = mergeSort(left);
    right = mergeSort(right);
    //console.log('LEFT:', left)
    //console.log('RIGHT:',right)
    return merge(left, right, array);
};
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        //to merge the 2 lists you just keep choosing the lowest value from the left or right arrays that hasn't already been added to the output array
        
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
        console.log('left',left[leftIndex],'right',right[rightIndex],'array',array[outputIndex++])
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    //console.log(array)
    //console.log('LEFT:', left)
    //console.log('RIGHT:',right)
    return array;
};

//QUICK SORT:
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};
function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

//ASSIGNMENT:

//Understanding list of numbers
    const numbers=[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
    //after 3 recursive calls to mergesort
    mergeSort(numbers)
    //console.log(mergeSort(numbers))
    //after 16 recursive calls to mergesort
    //first 2 list to be merged
    //which 2 list would be merged on the 7th merge

//Understanding quicksort

//Implement quicksort
    function qSort(data){
        
    }
//Implement merge sort

//Sorting a linked list using merge sort

//Bucket sort (write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.)

//Sort in place(write an algorithm to shuffle an array into a random order in place)

//Sorting books(Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm)