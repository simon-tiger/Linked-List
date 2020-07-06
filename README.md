# Linked List

A linked list is like an array (a list in Python), but the way it's stored in memory are different. You initially only have access to the 1st element. But, each element has a pointer to the next one, so you can easily access every element in the list. The pointer from the last element points to `null` (`None` in python).

## Objective

Implement a linked list class called `LinkedList`. You are **not** allowed to use arrays/lists anywhere in your code. It should have:
1. A function `get(index)` to access any element from the linked list.
2. A function `append(elt)` to add any element to the tail of the linked list.
3. A function `insert(index, elt)` to insert any element to any given position of the linked list.
4. A function `set(index, elt)` to change any element in the linked list to any value.
5. A function `remove(index)` to delete any element from the linked list.
