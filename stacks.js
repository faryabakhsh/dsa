//STACK:
//LIFO data structure 
//last in first out


//its not constant time to remove from the itme,becoz we have to iterate through the entire list to get to the second to last item
//stack is suppose to be constnt time so we are adding and removing from the beginning, so we are calling push and pop bcoz it is a stack O(1)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){                                //the function is accepting a value
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

    pop(){
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