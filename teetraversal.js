//two ways:
//BFS------> horixonatllay


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

BFS() {
    var node = this.root,
        data = [],               // empty array to be returned at the end
        queue = [];                  // create a queue and a variable to store the values of node visited 
    queue.push(node);               //place the root node on the queue

    while(queue.length){                     //while there is something in the queue we are going to remove something form the beginning if the queue
       node = queue.shift();
       data.push(node.value);
       if(node.left) queue.push(node.left);
       if(node.right) queue.push(node.right);
    }
    return data;
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
    

  






//DFS  -----------> vertically 