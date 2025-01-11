//say that you are a traveler on a 2d grid
//you begin in the top left corner and your goal is to travel to the bottom right corner
//you may only move down or right

//in how many ways you travel to the goal on a grid with dimensions m*n

//gridTraveler(a,b) = gridTraveler(b,a)

const gridTraveler1 = (m,n) => {
    if(m === 0 || n === 0){
        return 0;
    }
    else if(m === 1 && n === 1){
        return 1;
    }
    else{
        return gridTraveler1(m-1,n) + gridTraveler1(m,n-1);
    }
};
//O(2^(n+m)) time
//O(n+m) space

console.log(gridTraveler1(1,1));
console.log(gridTraveler1(2,3));
console.log(gridTraveler1(3,2));
console.log(gridTraveler1(3,3));

const gridTraveler2 = (m,n,memo = {}) => {
    const key = m + "," + n;

    if(m === 0 || n === 0){
        return 0;
    }
    else if(m === 1 && n === 1){
        return 1;
    }
    else if(key in memo){
        return memo[key];
    }
    else{
        memo[key] = gridTraveler2(m-1,n,memo) + gridTraveler2(m,n-1,memo);
        return memo[key];
    }
};
//O(n*m) time
//O(n+m) space

console.log(gridTraveler2(1,1));
console.log(gridTraveler2(2,3));
console.log(gridTraveler2(3,2));
console.log(gridTraveler2(3,3));
console.log(gridTraveler2(18,18));

const gridTraveler3 = (m,n) => {
    const array = Array(m+1).fill().map(() => Array(n+1).fill(0));
    array[1][1] = 1;

    for(let i=0; i<m+1; i++){
        for(let j=0; j<n+1; j++){
            if(i+1 <= m){
                array[i+1][j] += array[i][j];
            }
            if(j+1 <= n){
                array[i][j+1] += array[i][j];
            }
        }
    }

    return array[m][n];
};
//O(n*m) time
//O(n*m) space

console.log(gridTraveler3(1,1));
console.log(gridTraveler3(2,3));
console.log(gridTraveler3(3,2));
console.log(gridTraveler3(3,3));
console.log(gridTraveler3(18,18));