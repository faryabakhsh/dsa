//graph is the collection of nodes and the connection btw those nodes
//no CanvasPattern, just nodes with connecions
//NODE + CONNECTIONS = GRAPHHS

//implementation of graphs ---> adjacency list
//traverse through a graph ---> BFS, DFS

//USES:

//socila network 
//mapping
//recommendations ( nodes which are common, suggestions etc)

//TYPES:

//vertex - node
//edge - connecion btw nodes

//directed(MAPPING, INSTA CELEBRITY EXAMPLE, CELEBRITY PROFILES, ONE WAY CONNECTION ) vs undirected graphs (FB FRIENDS, TWO WAY CONNECTIONS)
//WEIGHTED UN WEIGTED GRAPHS

// STORING INFO IN GRAPHS
// ADJACENCY MARIX   ---> store information in rows and columns 
// ADJACENCY LIST   ----> we use an array or list to store the edges ---- key value paor hash tables --- faster to iterate over edges ---- more nodes less edges --- more ptrcatical more real world based


//ADDING VERTEX:

class Graph {                           // this is our skeleton
    constructor(){                   // we have the adjacency list to store the information
        this.adjacencyList ={}              /// we will start off empty 
    }
    addVertex(vertex){                                  // write a method called addVetex and set its value equal to vertex
        this.adjacencyList[vertex] =[]                  // it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    }                                                   // e.g, g.addVertex("tokyo") // {"tokyo": []"}
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);                // for undirected graph--- is there is , one direction, directed graph they only one liner 
    }
    removeEdge(vertex1, vertex2){                                           //the function should accept two vertices
        this.adjacencyList[vertex1]= this.adjacencyList[vertex1].filter(        //the function should reassign the value of v1 to be an array that does not contain v2
            v => v != vertex2                           //// take the current adjacency list if vertex 1, filter it and keep everthing where it is not equal to vertex 2
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
        delete this.adjacencyList[vertex]                                   //delete the key in the adjacecny list for that vertex
    }
}


let g = new Graph();
g.addVertex("dallas");
g.addVertex("aspen");

g.addEdge("dallas","aspen")
