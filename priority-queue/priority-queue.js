/*
* Naive implementations
*
* There are a variety of simple, usually inefficient, ways to implement a priority queue.
* They provide an analogy to help one understand what a priority queue is.
* For instance, one can keep all the elements in an unsorted list.
* Whenever the highest-priority element is requested, search through all elements for the one with the highest priority.
* (In big O notation: O(1) insertion time, O(n) pull time due to search.)
*
*
* Usual implementation
*
* To improve performance, priority queues typically use a heap as their backbone, giving O(log n) performance for
* inserts and removals, and O(n) to build initially. Variants of the basic heap data structure such as pairing
* heaps or Fibonacci heaps can provide better bounds for some operations.
*
* Alternatively, when a self-balancing binary search tree is used, insertion and removal also take O(log n) time,
* although building trees from existing sequences of elements takes O(n log n) time; this is typical where one might
* already have access to these data structures, such as with third-party or standard libraries.
*
* From a computational-complexity standpoint, priority queues are congruent to sorting algorithms.
*
*
* https://en.wikipedia.org/wiki/Priority_queue
*/
/*------------------------------------------------------*/
/*          Value           |          Priority         */
/*------------------------------------------------------*/
/*          Слон            |              3            */
/*------------------------------------------------------*/
/*          Кит             |              1            */
/*------------------------------------------------------*/
/*          Лев             |              15           */
/*------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/

import Node from './node';

export default class PriorityQueue {
    constructor() {
        this.items = [];
    }

    /**
     * peek aka min
     * returns value of the less priority queue element
     */
    peek() {
        if (this.isEmpty()) throw new Error('Can not peek. The priority queue is empty');

        return this.items[0];
    }

    /**
     * returns size of queue
     */
    size() {
        return this.items.length;
    }

    /**
     * returns true if queue is empty, else returns false
     */
    isEmpty() {
        return !this.items.length;
    }

    /**
     * enqueue aka insert
     * adds element to the queue
     * @param data
     * @param priority
     */
    enqueue(data, priority) {
        let newNode = new Node(data, priority);
        let contain = false;

        for (let i = 0; i < this.items.length; i+=1) {
            if (this.items[i].priority > newNode.priority) {
                this.items.splice(i, 0, newNode);
                contain = true;
                break;
            }

            if (!contain) {
                this.items.push(newNode);
            }
        }

    }

    /**
     * dequeue aka deleteMin
     * deletes first element from the queue
     * returns removed node
     */
    dequeue() {
        if (this.isEmpty()) throw new Error('Can not dequeue. The priority queue is empty');

        return this.items.shift();
    }
}

/*
* hint:
*
* http://www.geeksforgeeks.org/implementation-priority-queue-javascript/
* */