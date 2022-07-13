// visiting, updating, checking each vertex in a graph

// USES:
// peer to peer Networking
// web crawlers == wikipedia
// finding closest matching recommendation ----- WebGLTransformFeedback, instagram friend recommendations
// shortest path problems

// DFS:
// continuing to flow the neighbours 

// -recursively
// -iteratively

// DFS PSEUDOCODE:

// DFS(vertex):
//     if vertex is empty
//         return (this is base case)
//     add vertex to result list
//     mark vertex as visited
//     for each neighbor in vertex neighbors:
//         if neighbor is not visited:
//             recursively call DFS    on neighbor

