import Node from './node';

export default class SinglyLinkedList {
    constructor() {
        this._head = null;
        this.length = 0;
    }

    /* 1 assigns a node as the head of a list */
    head() {
        if(this._head){
            return this._head.data;
        }
    }

    /* 2 adds a node to a list */
    append(data) {
        let node = new Node(value);
        let currentNode = this.head;

        if ( this.isEmpty() ) {
            this._head = node;
            this.length++;
        } else {

        }

    }

    /* 3 searches for a node at n-position in our list */
    searchNodeAt(index){
        let node = this._head;

        for(let i=0; i<index; i+=1) {
            node = node.next;
        }

        return node;
    }

    /* 4 removes a node from a list */
    removeNodeAt(index) {}

    /* 5 Return true if list is empty */
    isEmpty() {
        return this.length === 0;
    }
}