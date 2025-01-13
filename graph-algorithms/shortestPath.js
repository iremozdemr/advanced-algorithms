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

const shortestPathBFS = (edges,startNode,endNode) => {
    const graph = buildGraph(edges);
    const queue = [[startNode,0]];
    const visited = new Set();

    while(queue.length > 0){
        const [currentNode, distance] = queue.shift();

        if (currentNode === endNode) {
            return distance; 
        }
        else{
            visited.add(currentNode);

            for (let neighbor of graph[currentNode]) {
                if (visited.has(neighbor) === false) {
                    queue.push([neighbor,distance + 1]); 
                }
            }
        }
    }
};

const shortestPathDFS = (edges,startNode,endNode) => {
    const graph = buildGraph(edges);
    const visited = new Set();

    const shortestPathLength = explore(graph,startNode,endNode,visited);
    return shortestPathLength;
};

const explore = (graph,currentNode,endNode,visited) => {
    if(visited.has(currentNode)){
        return Infinity;
    }
    else if(currentNode === endNode){
        return 0;
    }
    else{
        visited.add(currentNode);
        let shortestPathLength = Infinity;

        for(let neighbor of graph[currentNode]){
            const pathLength = explore(graph,neighbor,endNode,visited);
            if(pathLength + 1 < shortestPathLength){
                shortestPathLength = pathLength + 1;
            }
        }

        visited.delete(currentNode);
        return shortestPathLength;
    }
};

const edges = [
    ["w", "x"],
    ["x", "y"],
    ["z", "y"],
    ["z", "v"],
    ["w", "v"]
];

console.log("shortest path dfs:",shortestPathDFS(edges,"w","z"));
console.log("shortest path bfs:",shortestPathBFS(edges,"w","z"));