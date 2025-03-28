//can you do it yes/no
//desicion problem

//write a function cansum(targetSum,numbers) that takes in a targetSum and an array of numbers as arguments
//the function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array
//you may use an element of the array as many times as needed
//you may assume that all input numbers are nonnegative

const canSum1 = (targetSum,numbers) => {
    if(targetSum === 0){
        return true;
    }
    else if(targetSum < 0){
        return false;
    }
    else{
        for(let number of numbers){
            if(canSum1(targetSum-number,numbers) === true){
                return true;
            }
        }

        return false;
    }
};
//m = target sum
//n = array length
//O(n^m) time
//O(m) space

console.log(canSum1(7,[2,3]));
console.log(canSum1(7,[2,4]));
console.log(canSum1(8,[2,3,5]));

const canSum2 = (targetSum,numbers,memo = {}) => {
    if(targetSum === 0){
        return true;
    }
    else if(targetSum < 0){
        return false;
    }
    else if(targetSum in memo){
        return memo[targetSum];
    }
    else{
        for(let number of numbers){
            if(canSum2(targetSum-number,numbers,memo) === true){
                memo[targetSum] = true;
                return true;
            }
        }

        memo[targetSum] = false;
        return false;
    }
};
//m = target sum
//n = array length
//O(n*m) time
//O(m) space

console.log(canSum2(7,[2,3]));
console.log(canSum2(7,[2,4]));
console.log(canSum2(8,[2,3,5]));
console.log(canSum2(3000,[7,14]));

const canSum3 = (targetSum,numbers) => {
    const array = Array(targetSum+1).fill(false);
    array[0] = true;
    array[targetSum] = true;

    for(let number of numbers){
        array[number] = true;
    }

    for(let i=0; i<array.length; i++){
        if(array[i] === true){
            for(let number of numbers){
                let index = i+number;
                if(index < array.length){
                    array[index] = true;
                }
                if(index+i === targetSum){
                    return true;
                }
            }
        }
    }

    return false;
};
//m = target sum
//n = array length
//O(n*m) time
//O(m) space

console.log(canSum3(7,[2,3]));
console.log(canSum3(7,[2,4]));
console.log(canSum3(8,[2,3,5]));
console.log(canSum3(3000,[7,14]));