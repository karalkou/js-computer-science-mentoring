import Node from './node';

export default class Queue {
    constructor() {
        /* NB: this.head.next is null, cause it is queue, not stack */
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * returns value of first queue element
     */
    peek() {
        return this.head ? this.head.value : null;
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
     * @param value
     */
    enqueue(value) {
        let newNode = new Node(value);

        if( this.isEmpty() ){
            this.tail = this.head = newNode;
            this.length++;
            return this.tail;
        }

        if( this.length === 1 ){
            this.tail = newNode;
            this.tail.next = this.head;
            this.length++;
            return this.tail;
        }

        let currentTail = this.tail;
        this.tail = newNode;
        this.tail.next = currentTail;
        this.length++;
        return this.tail;
    }

    /**
     * deletes first element from the queue
     */
    dequeue() {

        if( this.isEmpty() ) throw new Error( 'Can not dequeue. The queue is empty' );

        let removedNode = this.head;
        let currentFromTheEnd = this.tail;

        if( this.length === 1 ) {
            this.tail = this.head = null;
            this.length--;
            return removedNode;
        }

        while( currentFromTheEnd.next !== this.head ){
            currentFromTheEnd = currentFromTheEnd.next;
        }

        this.head = currentFromTheEnd;
        this.head.next = null;
        this.length--;

        return removedNode;
    }
}