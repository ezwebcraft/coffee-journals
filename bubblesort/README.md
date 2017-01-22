# JS Bubble Sort
This can be expressed in pseudo-code as follows (assuming 1-based indexing):
repeat
'''
    hasChanged := false
    decrement itemCount
    repeat with index from 1 to itemCount
        if (item at index) > (item at (index + 1))
            swap (item at index) with (item at (index + 1))
            hasChanged := true
until hasChanged = false
'''
source: [bubblesort](http://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort)