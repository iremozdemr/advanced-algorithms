array = ["a","b","c"];
console.log(array);

newArray1 = [...array];
console.log(newArray1);

newArray2 = [...array,"d"];
console.log(newArray2);

newArray3 = ["d",...array];
console.log(newArray3);

//write a function howSum(targetSum,numbers) that takes in a targetSum and an array of numbers as arguments
//the function should return an array containing any combination of elements that add up to exactly the targetSum
//if there is no combination that adds up to the targetSum then return null
//if there are multiple combinations possible you may return any single one

const howSum1 = (targetSum,numbers) => {
    if(targetSum === 0){
        return [];
    }
    else if(targetSum < 0){
        return null;
    }
    else{
        for(let number of numbers){
            const result = howSum1(targetSum-number,numbers);

            if(result != null){
                return [...result,number];
            }
        }

        return null;
    }
};
//m = target sum
//n = array length
//O((n^m) * m) time
//O(m) space

console.log(howSum1(7, [2, 3])); 
console.log(howSum1(7, [5, 3, 4, 7])); 
console.log(howSum1(7, [2, 4])); 
console.log(howSum1(8, [2, 3, 5])); 
console.log(howSum1(0, [1, 2, 3])); 
console.log(howSum1(8, [2])); 

const howSum2 = (targetSum,numbers,memo = {}) => {
    if(targetSum === 0){
        return [];
    }
    else if(targetSum < 0){
        return null;
    }
    else if(targetSum in memo){
        return memo[targetSum];
    }
    else{
        for(let number of numbers){
            const result = howSum2(targetSum-number,numbers,memo);

            if(result != null){
                memo[targetSum] = [...result,number];
                return memo[targetSum];
            }
        }

        memo[targetSum] = null;
        return memo[targetSum];
    }
};
//m = target sum
//n = array length
//O(n*m*m) time
//O(m*m) space

console.log(howSum2(7, [2, 3])); 
console.log(howSum2(7, [5, 3, 4, 7])); 
console.log(howSum2(7, [2, 4])); 
console.log(howSum2(8, [2, 3, 5])); 
console.log(howSum2(0, [1, 2, 3])); 
console.log(howSum2(8, [2])); 
console.log(howSum2(300, [7,14])); 

const compare = (testCases) => {
    const measureTime = (func, targetSum, numbers) => {
        const start = performance.now(); 
        func(targetSum, numbers); 
        const end = performance.now();
        return end - start; 
    };

    testCases.forEach(([targetSum, numbers], index) => {
        console.log(`test case ${index + 1}: targetSum = ${targetSum}, numbers = ${numbers}`);
        
        const time1 = measureTime(howSum1, targetSum, numbers);
        console.log(`howSum1 took ${time1.toFixed(6)} ms`);

        const time2 = measureTime((targetSum, numbers) => howSum2(targetSum, numbers, {}), targetSum, numbers);
        console.log(`howSum2 took ${time2.toFixed(6)} ms`);
        
        console.log(
            `faster function: ${
                time1 < time2 ? "howSum1" : "howSum2"
            }`
        );
        console.log('------------------------------------');
    });
};

const testCases = [
    [300, [7,14]],
];

compare(testCases);