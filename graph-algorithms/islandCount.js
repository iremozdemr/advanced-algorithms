const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {
            if (explore(grid,row,column,visited)) {
                count++;
            }
        }
    }

    return count;
}

const explore = (grid, row, column, visited) => {
    if(row < 0 || row >= grid.length){
        return false;
    }
    else if(column < 0 || column >= grid[0].length){
        return false;
    }
    else if(grid[row][column] === "0"){
        return false;
    }
    else{
        const position = `${row},${column}`;
        if(visited.has(position)){
            return false;
        }
        else{
            visited.add(position);

            explore(grid,row - 1,column,visited);
            explore(grid,row + 1,column,visited); 
            explore(grid,row,column - 1,visited); 
            explore(grid,row,column + 1,visited);

            return true;
        }
    }
}

const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

console.log("island count:",islandCount(grid));