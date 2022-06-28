class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;          // empty root to start
    }
    insert(value) {
        var newNode = new Node();        //making a new node to start 
        if(this.root === null) {        // cehcking if there is root already, if not set this.root to thr new node
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value ===current.value) return undefined;
                if(value < current.value) {
                    if(current.left=== null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right ===null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        
    
    contains(value){
        if(this.root ===null) return false;
        var current = this.root
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;            }
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    
}
}

