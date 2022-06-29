//graph is the collection of nodes and the connection btw those nodes
//no CanvasPattern, just nodes with connecions
//NODE + CONNECTIONS = GRAPHHS


//USES:

//socila network 
//mapping
//recommendations ( nodes which are common, suggestions etc)

//TYPES:
//vertex - node
//edge - connecion btw nodes

//directed vs undirected graphs


//ADDING VERTEX:

class Graph {
    constructor(){
        this.adjacencyList ={}
    }
    addVertex(vertex){                                  // wrute a method called addVetex and set its value equal to vertex
        this.adjacencyList[vertex] =[]                  // it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2){                                           //the function should accept two vertices
        this.adjacencyList[vertex1]= this.adjacencyList[vertex1].filter(        //the function should reassign the value of v1 to be an array that does not contain v2
            v => v != vertex2
        );
        this.adjacencyList[vertex2]= this.adjacencyList[vertex2].filter(            //the function should reassign the value of v1 to be an array that does not contain v2
            v => v != vertex1
        );
    }
    removeVertex(vertex) {                                                  //the function should accept a vertex to remove
        while(this.adjacencyList[vertex].length) {                             //the function should loop as long as there are any other vertices in the adjacency list for that vertex
            const adjacentVertex =this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);                            //inside the loop call remove edge function with the vertex we are removing and any value in the adjanceny list for that vertex
        }
        delete this.adjacencyList[vertex]                                   //deleter the keyin the adjacecny listfor that vertex
    }
}


let g = new Graph();
g.addVertex("dallas");
g.addVertex("aspen");

g.addEdge("dallas","aspen")
