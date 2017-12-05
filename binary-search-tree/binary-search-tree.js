import Node from './node';

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    root() {
        // returns root element of bst
        if ( !this.root ) throw new Error('there is no root element');
        return this.root;
    }

    insert(data) {
        // insert node to bst
        let node = new Node(data);
        if(!this.root) {
            this.root = node;
        } else {
            let current = this.root;

            while(current) {
                if(node.data < current.data) {
                    if(!current.left) {
                        current.left = node;
                        break;
                    }
                    current = current.left;
                } else if (node.data > current.data) {
                    if(!current.right) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                } else {
                    break;
                }
            }
        }
    }

    removeAt(data) {
        // delete node from bst
        let removeNode = function(node, data) {
            if(!node) {
                return null;
            }
            if(data === node.data) {
                if(!node.left && !node.right) {
                    return null;
                }
                if(!node.left) {
                    return node.right;
                }
                if(!node.right) {
                    return node.left;
                }
                
                // 2 children
                let temp = that.getMin(node.right);
                node.data = temp;
                node.right = removeNode(node.right, temp);
                return node;
                
            } else if(data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
                
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };

        this.root = removeNode(this.root, data);
    }

    search(data) {
        // return node with data of argument
        let current = this.root;
        while(current) {
            if(data === current.data) {
                return current;
            }
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return current;
    }

    contains(data) {
        // returns true if tree contains node with data from argument
        let current = this.root;
        while(current) {
            if(data === current.data) {
                return true;
            }
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    traverse() {}

    verify() {}

    getMax(node){
        if(!node) {
            node = this.root;
        }
        while(node.right) {
            node = node.right;
        }

        return node.data;
    }

    getMin(node){
        if(!node) {
            node = this.root;
        }
        while(node.left) {
            node = node.left;
        }

        return node.data;
    }
}