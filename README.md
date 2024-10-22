# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The stack is used to simulate the recursive function calling. Initilize the stack takes $O(1)$; push the initial boundaries also taks $O(1)$; In the while loop, the loop continues as long as there are subarray to process, the total number of iterations in the worst case is $O(n)$, if the array is already sorted. Pop high and low element from the stack takes $O(1)$, and the if check takes $O(1)$ as well; Select the pivot as low takes $O(1)$; In the for loop, it iterate through the subarray from low+1 to high and compare each element with the pivot, in the worst case, the time complexity is $O(n)$, if the pivot only split off one element at each time. Outside the for the loop, move pivot to next position takes $O(1)$, and the push also takes $O(1)$.

Therefore, combine together, the time complexity of the worst case is $\Theta(n^2)$