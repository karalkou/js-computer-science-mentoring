import Node from './node';

export default class PriorityQueue {
    constructor() {
        // this.heap = new MaxHeap();
    }

    /**
     * returns size of queue
     */
    size() {
        return this.length;
    }

    /**
     * returns true if queue is empty, else returns false
     */
    isEmpty() {
        return !this.length;
    }

    /**
     * adds last element to the queue
     * @param data
     * @param priority
     */
    enqueue(data, priority) {}

    /**
     * deletes first element from the queue
     */
    dequeue() {}
}