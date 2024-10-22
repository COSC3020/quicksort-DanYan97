function quicksort(array) {

    //use stack to manupulate the elements 
    var stack = [];

    //store the boundires in the stack in order to partition
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 0) {
        var high = stack.pop();
        var low = stack.pop();

        if (low >= high) continue; // base case, subarray with one or zero elements

        // select first element as the pivot
        var pivot = low;

        // partition the array
        for (var i = low + 1; i <= high; i++) {
            if (array[i] < array[low]) {
                // increment pivot and swap elements
                pivot++;
                [array[pivot], array[i]] = [array[i], array[pivot]];
            }
        }

        // move the pivot 
        [array[low], array[pivot]] = [array[pivot], array[low]];

        // push the subarrays onto the stack 
        stack.push(low);
        stack.push(pivot - 1);

        stack.push(pivot + 1);
        stack.push(high);
    }

    return array;
}
