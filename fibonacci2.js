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

const array1 = Array(8);
console.log(array1);

const array2 = Array(8).fill(0);
console.log(array2);

const fibonacci1 = (n) => {
    if(n <= 2){
        return 1;
    }
    else{
        return fibonacci1(n-1) + fibonacci1(n-2);
    }
};
//O(2^n) time
//O(n) space

console.log(fibonacci1(7));

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
//O(n) time
//O(n) space

console.log(fibonacci2(7));
console.log(fibonacci2(50));

const fibonacci3 = (n) => {
    const array = Array(n+1).fill(0);
    array[0] = 0;
    array[1] = 1;

    for(let i=0; i<n+1; i++){
        array[i+1] += array[i];
        array[i+2] += array[i];
    }

    return array[n];
};
//O(n) time
//O(n) space

console.log(fibonacci3(7));
console.log(fibonacci3(50));