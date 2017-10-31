import Node from './node';

export default class SinglyLinkedList {
    constructor() {
        this._head = null;
        this.length = 0;
    }

    /* 1 Return data from the this._head */
    head() {
        if(this._head){
            return this._head.data;
        } else {
            throw new Error('There is no head at this list');
        }
    }

    /* 2 adds a node to a list */
    append(data) {
        let node = new Node(data);
        let currentNode = this._head;

        if ( this.isEmpty() ) {

            this._head = node;
            this.length++;

        } else {

            while ( currentNode.next ) currentNode = currentNode.next;

            currentNode.next = node;
            this.length++;
        }

    }

    /* 3 searches for a node at index in our list */
    searchNodeAt(index){
        let currentNode = this._head;
        let length = this.length;
        let message = {
            failure: 'non-existent node in this list'
        };

        if( length === 0 && index < 1 && index > length ){
            throw new Error(message.failure);
        }

        for(let i=0; i<index; i+=1) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    /* 4 removes a node from a list */
    removeNodeAt(index) {
        let currentNode = this._head;
        let length = this.length;
        let message = {
            failure: 'non-existent node in this list'
        };

        if( length === 0 && index < 1 && index > length ){
            throw new Error(message.failure);
        }

        if ( index === 1 ) {

            this._head = currentNode.next;
            currentNode = null;
            this.length--;

        } else {

            let nodeToRemove = this.searchNodeAt(index);
            let beforeNodeToRemove = this.searchNodeAt(index-1);
            beforeNodeToRemove.next = nodeToRemove.next;
            nodeToRemove = null;
            this.length--;

        }

    }

    /* 5 Return true if list is empty */
    isEmpty() {
        return this.length === 0;
    }
}