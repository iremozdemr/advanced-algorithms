//hasPath algorithm:

//purpose:
//determines if there is a path between two nodes in a graph
//returns true if a path exists otherwise false

//input parameters:
//graph: a representation of the graph (adjacency list)
//sourceNode: the starting node
//destinationNode: the target node

//output:
//a boolean value indicating whether a path exists between the source and destination nodes

//algorithm explanation:

//1- base case:
//if the source is the same as the destination return true

//2- recursive case:
//for each neighbor of the source node:
//recursively check if a path exists from the neighbor to the destination
//if any recursive call returns true a path exists so return true

//3- termination:
//if all neighbors have been visited and no path is found return false

const hasPathDepthFirst = (graph,sourceNode,destinationNode) => {
    const stack = [sourceNode];

    while(stack.length > 0){
        const currentNode = stack.pop();
        if(currentNode === destinationNode){
            return true;
        }
        for(let neighbor of graph[currentNode]){
            stack.push(neighbor);
        }
    }

    return false;
};

const hasPathBreadthFirst = (graph,sourceNode,destinationNode) => {
    const queue = [sourceNode];

    while(queue.length > 0){
        const currentNode = queue.shift();
        if(currentNode === destinationNode){
            return true;
        }
        for(let neighbor of graph[currentNode]){
            queue.push(neighbor);
        }
    }

    return false;
};

const hasPathRecursion = (graph,sourceNode,destinationNode) => {
    if(sourceNode === destinationNode){
        return true;
    }
    else{
        const currentNode = sourceNode;
        for (let neighbor of graph[currentNode]) {
            if(hasPathRecursion(graph,neighbor,destinationNode)){
                return true;
            }
        }

        return false;
    }
};
//n = number of nodes
//e = number of edges
//time = O(e)
//space = O(n)

//n = number of nodes
//n^2 = number of edges
//time = O(n^2)
//space = O(n)

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: [],
    e: ['f'],
    f: []
};

console.log(hasPathDepthFirst(graph, 'a', 'f')); 
console.log(hasPathDepthFirst(graph, 'a', 'd')); 
console.log(hasPathDepthFirst(graph, 'c', 'a')); 

console.log(hasPathBreadthFirst(graph, 'a', 'f')); 
console.log(hasPathBreadthFirst(graph, 'a', 'd')); 
console.log(hasPathBreadthFirst(graph, 'c', 'a')); 

console.log(hasPathRecursion(graph, 'a', 'f')); 
console.log(hasPathRecursion(graph, 'a', 'd')); 
console.log(hasPathRecursion(graph, 'c', 'a')); 