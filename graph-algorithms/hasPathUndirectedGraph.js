const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges){
        const [a,b] = edge;
        if((a in graph) === false){
            graph[a] = [];
        }
        if((b in graph) === false){
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};

const hasPathDepthFirst = (graph,sourceNode,destinationNode) => {
    const visited = new Set();
    const stack = [sourceNode];

    while(stack.length > 0){
        const currentNode = stack.pop();

        if(currentNode === destinationNode){
            return true;
        }
        else if(visited.has(sourceNode) === false){
            visited.add(sourceNode);

            for(let neighbor of graph[currentNode]){
                stack.push(neighbor);
            }
        }
    }

    return false;
};

const hasPathBreadthFirst = (graph,sourceNode,destinationNode) => {
    const visited = new Set();
    const queue = [sourceNode];

    while(queue.length > 0){
        const currentNode = queue.shift();
        if(currentNode === destinationNode){
            return true;
        }
        else if(visited.has(sourceNode) === false){
            visited.add(sourceNode);

            for(let neighbor of graph[currentNode]){
                queue.push(neighbor);
            }
        }
    }

    return false;
};

const hasPathRecursion = (graph,sourceNode,destinationNode,visited = new Set()) => {
    if(sourceNode === destinationNode){
        return true;
    }
    else if(visited.has(sourceNode)){
        return false;
    }
    else{
        visited.add(sourceNode);

        for (let neighbor of graph[sourceNode]) {
            if(hasPathRecursion(graph,neighbor,destinationNode,visited)){
                return true;
            }
        }

        return false;
    }
};

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n'],
];

const graph = buildGraph(edges);

console.log(hasPathDepthFirst(graph,'i','j')); 
console.log(hasPathDepthFirst(graph,'o','i')); 
console.log(hasPathDepthFirst(graph,'m','k')); 

console.log(hasPathBreadthFirst(graph,'i','j')); 
console.log(hasPathBreadthFirst(graph,'o','i')); 
console.log(hasPathBreadthFirst(graph,'m','k')); 

console.log(hasPathRecursion(graph,'i','j')); 
console.log(hasPathRecursion(graph,'o','i')); 
console.log(hasPathRecursion(graph,'m','k'));