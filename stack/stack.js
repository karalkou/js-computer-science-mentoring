import Node from './node';

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    // delete the top element of stack
    pop() {
        let current = this.top;
        this.top = current.next;
        this.length--;
    }

    // add element on top of stack
    push(value) {
        let currentNode = this.top;
        this.top = new Node(value);
        this.top.next = currentNode;
        this.length++;
    }

    // returns value of top stack element
    peek() {
        return this.top ? this.top.value : null;
    }
}