// JS Bubble Sort
// This can be expressed in pseudo-code as follows (assuming 1-based indexing):
// repeat
//     hasChanged := false
//     decrement itemCount
//     repeat with index from 1 to itemCount
//         if (item at index) > (item at (index + 1))
//             swap (item at index) with (item at (index + 1))
//             hasChanged := true
// until hasChanged = false
// source: http://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort

var a = [12,34,213,543,23,124,643,2,34];

function bubble_sort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubble_sort(a);
console.log(a);
