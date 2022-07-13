// adding and removing data structure
// FIFO data structure 
// line 
// printing one page at a time 
// enqueue --- adding to the end
// dequeue --- removing from the beginning

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){                                //the function is accepting a value
        var newNode = new Node(val);            //creating a new node with that value
        if(!this.first) {                        //IF there are no first and last value in the queue, set the first and the last values in the queue to be the newly created node 
            this.first = newNode;               // in case we have the empty queue
            this.last = newNode;
         } else {                                 
            this.last.next = newNode;              // otherwise set the next propety on the current last to be that node, and then set the last property of the queue to be that node
            this.last = newNode
                           
         }
         return ++this.size                 //incremnet the size of the queue to be one
    }


    //remove form the beginning
    dequeue(){
        if(!this.first) return null;     //if the list is empty return null, there is nothing in the queue to pop
        var temp = this.first;              // this is what we are going to return at the very end
        if (this.first === this.last) {     /// if there is only one thing to be left set the value to thsi.last
            this.last = null;
        }
        this.first = this.first.next;          // we take this.first from the begginging and update it to be the next item
        this.size --;
        return temp.value;
    }
}