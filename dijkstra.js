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
    Dijkstra(start, finish){                        // the function hsould accept a starting and an ending vertex
         const nodes = new PriorityQueue();         //making a new priority queue
        const distances = {};
        const previous = {};
        let smallest;
        let path = [] //to return at end

        //build up initial state ----- looping over the entire adjacency list
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;                              //create an objecy (distances) and set each key to be every vertex in the adjacency list with the value of infinity, except for the starting vertex ehich should  have a value of 0
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;                        //creating another object called previousand set each key to be every vertes in the adjacency list with a value of null
        }
        // as long as there is something to visit
        while(nodes.values.length) {
          smallest =  nodes.dequeue().val;                //dequeue a vertex from a priority queue
          if(smallest === finish)    {                 // if the vertex is the same as the ending vertex  -- we are done!
        //WE SFRE DONE
                //SeattleUILD UP PSFTH TO RETURN SFT END
                while(previous[smallest]){
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          } 
          if(smallest || distances[smallest] !== Infinity){
              for(let neighbor in this.adjacencyList[smallest]){
                  //find neighboring node
                  let nextNode = this.adjacencyList[smallest][neighbor];
                  //calculate new distance to neighboring node
                  let candidate = distances[smallest] + nextNode.weight;
                  let nextNeighbor = nextNode.node;
                  if(candidate < distances[nextNeighbor]){
                      //updating new smallest distance to neighbor
                      distances[nextNeighbor] = candidate;
                      //updating previous - How we got to neighbor
                      previous[nextNeighbor] = smallest;
                      //enqueue in priority queue with new priority
                      nodes.enqueue(nextNeighbor, candidate);
                  }
              }
          }
      }
      return path.concat(smallest).reverse();     
  }
}

var graph = new WeightedGraph()
graph.addVertex("SF");
graph.addVertex("Seattle");
graph.addVertex("Idaho");
graph.addVertex("Chicago");
graph.addVertex("NYC");

graph.addEdge("SF","Seattle", 3);
graph.addEdge("SF","Idaho", 5);
graph.addEdge("Seattle","Idaho", 1);
graph.addEdge("Seattle","Chicago", 2);
graph.addEdge("Idaho","Chicago", 3);
graph.addEdge("Chicago","NYC", 4);
graph.addEdge("Idaho","NYC", 6);



console.log(graph.Dijkstra("SF", "NYC"));