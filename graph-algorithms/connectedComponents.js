const connectedComponentsCount = (graph) => {
    let count = 0;
    const visited = new Set();

    for(let node in graph){
        let result = explore1(graph,node,visited);
        if(result === true){
            count += 1;
        }
    }

    return count;
};
//n = number of nodes
//e = number of edges
//time = O(e)
//space = O(n)

const largestComponentSize = (graph) => {
    let maxCount = 0;
    const visited = new Set();

    for(let node in graph){
        let count = explore2(graph,node,visited);
        if(count !== 0 && count > maxCount){
            maxCount = count;
        }
    }

    return maxCount;
};

const explore1 = (graph,currentNode,visited) => {
    if(visited.has(currentNode)){
        return false;
    }
    else{
        visited.add(currentNode);

        for(let neighbor of graph[currentNode]){
            explore1(graph,neighbor,visited);
        }

        return true;
    }
};

const explore2 = (graph,currentNode,visited) => {
    if(visited.has(currentNode)){
        return 0;
    }
    else{
        let count = 1;

        visited.add(currentNode);

        for(let neighbor of graph[currentNode]){
            explore2(graph,neighbor,visited);
            count += 1;
        }

        return count;
    }
};

const graph = {
    0 : ["8", "1", "5"],
    1 : ["0"],
    5 : ["0", "8"],
    8 : ["0", "5"],
    2 : ["3", "4"],
    3 : ["2", "4"],
    4 : ["3", "2"]
};

for (let node of graph[0]) {
    console.log(node);
};

for(let node in graph){
    console.log(node);
};

console.log("connected components count:",connectedComponentsCount(graph));
console.log("largest component size:",largestComponentSize(graph));