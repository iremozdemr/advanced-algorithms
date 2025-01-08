object = {
    3 : 2,
    4 : 3,
    5 : 5,
    6 : 8,
    7 : 13,
}

console.log(1 in object);
//false
console.log(2 in object);
//false
console.log(3 in object);
//true
console.log(4 in object);
//true

const fibonacci1 = (n) => {
    if(n <= 2){
        return 1;
    }
    else{
        return fibonacci1(n-1) + fibonacci1(n-2);
    }
};

console.log(fibonacci1(7));
console.log(fibonacci1(50));

const fibonacci2 = (n,memo = {}) => {
    if(n in memo){
        return memo[n];
    }
    else if (n <= 2){
        return 1;
    }
    else{
        memo[n] = fibonacci2(n-1,memo) + fibonacci2(n-2,memo);
        return memo[n];
    }
};
//memoization

console.log(fibonacci2(7));
console.log(fibonacci2(50));

//fibonacci1:
//O(2^n) time
//O(n) space

//fibonacci2:
//O(n) time
//O(n) space