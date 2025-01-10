//what is the best way to do it
//optimization problem

//write a function bestSum(targetSum,numbers) that takes in a targetSum and an array of numbers as arguments
//the function should return an array containing the shortest combination of numbers that add up to exactly the targetSum
//if there is a tie for the shortest combination you may return any of the shortest

const bestSum1 = (targetSum,numbers) => {
    if(targetSum === 0){
        return [];
    }
    else if(targetSum < 0){
        return null;
    }
    else{
        let shortestCombination = null;
        
        for(let number of numbers){
            const remainderCombination = bestSum1(targetSum-number,numbers);

            if(remainderCombination !== null){
                const combination = [...remainderCombination,number];
                if(shortestCombination === null){
                    shortestCombination = combination;
                }
                if(combination.length <= shortestCombination.length){
                    shortestCombination = combination;
                }
            }
        }

        return shortestCombination;
    }
};
//m = target sum
//n = array length
//O((n^m) * m) time
//O(m*m) space

console.log(bestSum1(7,[5,3,4,7]));
console.log(bestSum1(8,[2,3,5]));
console.log(bestSum1(8,[1,4,5]));

const bestSum2 = (targetSum,numbers,memo = {}) => {
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
        let shortestCombination = null;
        
        for(let number of numbers){
            const remainderCombination = bestSum2(targetSum-number,numbers,memo);

            if(remainderCombination !== null){
                const combination = [...remainderCombination,number];
                if(shortestCombination === null){
                    shortestCombination = combination;
                }
                if(combination.length <= shortestCombination.length){
                    shortestCombination = combination;
                }
            }
        }

        memo[targetSum] = shortestCombination;
        return shortestCombination;
    }
};
//m = target sum
//n = array length
//O(n*m*m) time
//O(m*m) space

console.log(bestSum2(7,[5,3,4,7]));
console.log(bestSum2(8,[2,3,5]));
console.log(bestSum2(8,[1,4,5]));
console.log(bestSum2(100,[1,2,5,25]));

const bestSum3 = (targetSum,numbers) => {
    const array = Array(targetSum+1).fill(null);
    array[0] = [];

    for(let i=0; i<array.length; i++){
        if(array[i] !== null){
            for(let number of numbers){
                const index = i+number;
                if(index < array.length){
                    const combination = [...array[i],number];
                    if(array[index] === null){
                        array[index] = combination;
                    }
                    else if (combination.length < array[index].length) {
                        array[index] = combination;
                    }
                }
            }
        }
    }

    return array[targetSum];
};
//m = target sum
//n = array length
//O(n*m*m) time
//O(m*m) space

console.log(bestSum3(7,[5,3,4,7]));
console.log(bestSum3(8,[2,3,5]));
console.log(bestSum3(8,[1,4,5]));
console.log(bestSum3(100,[1,2,5,25]));