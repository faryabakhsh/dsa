// adding and removing data structure
// FIFO data structure 
// line 
// printing one page at a time 


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
        if(!this.first) {                        //IF there are no first and last value in the stac, set the first and the last values in the stack to be the newly created node 
            this.first = newNode;
            this.last = newNode;
         } else {                                 // if there is altelat one node create a variable that stores the currnet first property on the stck
            var temp = this.first;              //the current this.first, bcoz we are adding it to the beginning ----> resetting the forst property to be the newly cteated node
            this.first = newNode;
            this.first.next = temp;                //the old beginning ----> set the next property on the node to be the prebiously created variable
         }
         return ++this.size
    }

    dequeue(){
        if(!this.first) return null;     //if the list is empty return null, there is nothing in the stack to pop
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this. first.next;
        this.size --;
        return temp.value
    }
}