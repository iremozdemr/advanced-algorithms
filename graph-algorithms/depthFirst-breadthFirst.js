//depth first:
//stack

//breadth first
//queue

//vertex = node

//adjacency:
//- two nodes are adjacent if there is an edge between them
//- represented using adjacency lists or adjacency matrices in programming

//adjacency list:
//- a data structure to store a graph
//- each vertex stores a list of its neighbors

//adjacency matrix:
//- a 2d matrix to represent a graph
//- if there is an edge between vertex i and vertex j
//matrix[i][j] = 1 (or weight)

//degree:
//- number of edges connected to a node
//- in directed graphs includes:
//in-degree: number of edges directed toward the node
//out-degree: number of edges directed away from the node

//path:
//- a sequence of nodes where each adjacent pair is connected by an edge
//- a path has a starting and an ending node

//simple path:
//- a path that does not contain repeated nodes or edges

//acyclic graph:
//- a graph with no cycles
//- a cycle is a path where the starting node and ending node are the same
//and no edge is repeated

//directed graph:
//- a graph where edges have a direction
//- if there is an edge from A to B:
//you can only travel from A to B
//not vice versa

//directed graph:
//- a graph where edges have no direction
//- if there is an edge from A to B:
//you can travel both ways

array = [1,2,3,4];
console.log(array);

array.push(8);
console.log(array);

array.shift();
console.log(array);

const depthFirstPrint = (graph,sourceNode) => {
    const stack = [sourceNode];

    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
};

const depthFirstRecursionPrint = (graph,sourceNode) => {
    console.log(sourceNode);
    
    for(let neighbor of graph[sourceNode]){
        depthFirstRecursionPrint(graph,neighbor);
    }
};

const breadthFirstPrint = (graph,sourceNode) => {
    const queue = [sourceNode];

    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
};

const breadthFirstRecursionPrintHelper = (graph,queue) => {
    if(queue.length === 0){
        return;
    }
    else{
        const current = queue.shift();
        console.log(current);

        for (let neighbor of graph[current]) {
            queue.push(neighbor); 
        }

        breadthFirstRecursionPrintHelper(graph, queue);
    }
};

const breadthFirstRecursionPrint = (graph, sourceNode) => {
    const queue = [sourceNode];
    breadthFirstRecursionPrintHelper(graph, queue);
};

const graph = {
    a : ["b","c"],
    b : ["d"],
    c : ["e"],
    d : ["f"],
    e : [],
    f : []
}

console.log(graph);

console.log("depth first");
depthFirstPrint(graph,"a");

console.log("depth first recursion");
depthFirstRecursionPrint(graph,"a");

console.log("breadth first");
breadthFirstPrint(graph,"a");

console.log("breadth first recursion");
breadthFirstRecursionPrint(graph,"a");