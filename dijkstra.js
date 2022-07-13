class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){                        // the function should accept a starting and an ending vertex
         const nodes = new PriorityQueue();         //making a new priority queue
        const distances = {};
        const previous = {};                      // where we store the quickest path to a certain vertex
        let smallest;                             // whatever the node we are visiting
        let path = [] //to return at end

        //build up initial state ----- 
        for(let vertex in this.adjacencyList) {          // using a for in loop, looping over entire adjacency list
            if(vertex === start) {                      // e.g. we are looking at "A"
                distances[vertex] = 0;                              //create an object (distances) and set each key to be every vertex in the adjacency list with the value of infinity, except for the starting vertex hich should  have a value of 0
                nodes.enqueue(vertex, 0);                           // after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex which should have a priorty of 0, because thats where we begin
            } else {
                distances[vertex] = Infinity;                       
                nodes.enqueue(vertex, Infinity);                    // nodes- PQ - we add in two things a vertex and its priority------ we will be enquing things later with the peiority thats isnt infinity
            }
            previous[vertex] = null;                        //creating another object called previous and set each key to be every vertices in the adjacency list with a value of null
        }
            //console.log(distances);

        // as long as there is something to visit
        while(nodes.values.length) {                      // nodes is our PQ, inside our PQ we are storing values, we are taking its length
          smallest =  nodes.dequeue().val;                //dequeue a vertex from a priority queue ----- give us the vertex of lowest priority
          if(smallest === finish)    {                 // if the vertex is the same as the ending vertex  -- we are done!
        //WE ARE DONE
                //BUILD UP A PATH TO RETURN AT THE END
                while(previous[smallest]){
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          } 
          if(smallest || distances[smallest] !== Infinity){             // if smallest is not the finishing vertex then loop through each value in the adjacency list for that vertex, e.g. if we are looking at "A", we have to look through each of its naighbors
              for(let neighbor in this.adjacencyList[smallest]){
                  //find neighboring node
                  let nextNode = this.adjacencyList[smallest][neighbor];
                  //calculate new distance to neighboring node
                  let candidate = distances[smallest] + nextNode.weight;     // current distance of the node + the neighbor
                  let nextNeighbor = nextNode.node;
                  if(candidate < distances[nextNeighbor]){                  // if this is smallest what we have currently stored in the neighbor
                      //updating new smallest distance to neighbor
                      distances[nextNeighbor] = candidate;
                      //updating previous - How we got to neighbor
                      previous[nextNeighbor] = smallest;                // updating previous--- the way we got to nextNeighbor is though smallest
                      //enqueue in priority queue with new priority
                      nodes.enqueue(nextNeighbor, candidate);           // candidate is the new value
                  }
              }
          }
      }
      return path.concat(smallest).reverse();     
  }
}

//creating a graph
var graph = new WeightedGraph()
graph.addVertex("SF");
graph.addVertex("Seattle");
graph.addVertex("Idaho");
graph.addVertex("Chicago");
graph.addVertex("NYC");

//adding the edges
graph.addEdge("SF","Seattle", 3);
graph.addEdge("SF","Idaho", 5);
graph.addEdge("Seattle","Idaho", 1);
graph.addEdge("Seattle","Chicago", 2);
graph.addEdge("Idaho","Chicago", 3);
graph.addEdge("Chicago","NYC", 4);
graph.addEdge("Idaho","NYC", 6);



console.log(graph.Dijkstra("SF", "NYC"));