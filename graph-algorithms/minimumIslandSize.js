const minimumIslandSize = (grid) => {
    const visited = new Set();
    let minSize = Infinity;

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {
            const size = explore(grid,row,column,visited);

            if(size < minSize && size !== 0){
                minSize = size;
            }
        }
    }

    if(minSize === Infinity){
        minSize = 0;
    }

    return minSize;
}

const explore = (grid, row, column, visited) => {
    if(row < 0 || row >= grid.length){
        return 0;
    }
    else if(column < 0 || column >= grid[0].length){
        return 0;
    }
    else if(grid[row][column] === "0"){
        return 0;
    }
    else{
        const position = `${row},${column}`;
        if(visited.has(position)){
            return 0;
        }
        else{
            visited.add(position);

            const result1 = explore(grid,row - 1,column,visited);
            const result2 = explore(grid,row + 1,column,visited); 
            const result3 = explore(grid,row,column - 1,visited); 
            const result4 = explore(grid,row,column + 1,visited);

            const result = result1 + result2 + result3 + result4 + 1;

            return result;
        }
    }
}

const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

console.log("minimum island size:",minimumIslandSize(grid));