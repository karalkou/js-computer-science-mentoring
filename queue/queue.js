import Node from './node';

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * delete first element of queue
   */
  shift() {
    while( this.head !== this.tail ){
        prevHeadNext = this.head.next;
        this.head = prevHeadNext;
        this.head.next = null;
        this.length--;
    }
  }

  /**
   * add last element of queue
   * @param value
   */
  unshift(value) {
    if ( !this.head ) {
      this.head = this.tail;
    }
    let currentNode = this.tail;
    this.tail = new Node(value);
    this.tail.next = currentNode;
    this.length++;
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
    return !!this.length;
  }
}
