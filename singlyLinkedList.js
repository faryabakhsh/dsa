//unlike array lists have no indices
// each element has a node --- head, tail, to keep track of the length
//no elevator only stairs
// bunch of nodes pointing to other nodes
// collection of nodes


class node {
    constructor (val) {
        this.val = val;
        this.next = null;                       // in the beginning there is nothing after it 
    }
}

class singlyLinkedList {
    constructor () {
        this.head = null;                   // poi nter to the head and tail
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node (val);                  //created a new node using the value passed to the function
        if (!newNode) {                                 // if there is no head property on the list, set the head and the tail to the newly created node
            this.head=newNode;                            //it will run when there is nothing on the list
            this.tail=this.head;
        } else {
            this.tail.next =newNode;                        //otherwise set the next property on the tail to be the new node
            this.tail = newNode;                            //and set the tail property on th list to be the newly created node
        }
        this.length ++;                                    // increment the length by one
        return this;                                        //return the list
    }           
}

var list = new singlyLinkedList()
list.push ("hello")
list.push("there")


// POP TAKES THE LAST NODE OF THE LIST AND RETURN IT TO US

class singlyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

pop() {
    if (!this.head) return undefined;               //if there are no nodes in the list, return undefined
    var current = this.head;                        // hello --->  world ---> !
    var newTail = current;                           //  c
                                                    //   nT
    while(current.next) {                           //loop through the list until you receach the tail
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;                              //set the tail to be the 2nd to last node
    this.tail.next = null;                          //set the next property of the 2nd to last node to be null
    this.length--;
    if(this.length === 0) {                         //decrement the length of the lsit by 1
        this.head = null;
        this.tail = null;
    }
    return current                                 // return the value of the node removed
}

}

//SHIFT -- REMOVING A NODE FROM THE BEGINNING OF THE LSIT AND RETURN THAT 


class singlyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    shift() {
        if(!this.head) return undefined              //if there are no nodes return undefined
        var currentHead = this.head                // store the current head property in a variable
        this.head = currentHead.next;               //set the head property to be the currnet head next property
        this.length--;
        return currentHead; 
    }

}

//unshift add a no  de to the beggining of the lsit 



class singlyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
unshift (val) {
    var newNode = new Node (val);                       // create a new node using the vale passed to the function
    if (!this.head) {                                   // if there is no head property to the lsit set the head and the tail to be the newly created ode
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next =this.head;                        //otherwise set the next property on the head to be the new node
            this.head = newNode;  
    }
        this.length++;
        return this;
}
}   

