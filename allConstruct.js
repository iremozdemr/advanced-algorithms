suffixWays = [["xy","z"],["x","yz"]];
console.log(suffixWays);

targetWays = suffixWays.map(way => ["a",...way]);
console.log(targetWays);

array = [1,2,3,4];
console.log(array);

numbers = [7,8];
array.push(numbers);
console.log(array);

array.push(6);
console.log(array);

//write a function allConstruct(target,wordBank) that accepts a target string and an array of strings
//the function should return a 2d array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array
//each element of the 2d array should represent one combination that constructs the target
//you may reuse elements of wordBank as many times as needed

const allConstruct1 = (target,wordBank) => {
    if(target === ""){
        return [[]];
    }
    else{
        let result = [];

        for(let word of wordBank){
            if(target.indexOf(word) === 0){
                const suffix = target.slice(word.length);

                const suffixWays  = allConstruct1(suffix,wordBank);
                const targetWays = suffixWays.map(way => [word, ...way]);
                result.push(...targetWays);
            }
        }

        return result;
    }
};
//m = target.length
//n = wordBank.length
//O(n^m) time
//O(m) space

console.log(allConstruct1("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); 
console.log(allConstruct1("purple", ["purp", "p", "ur", "le", "purpl"])); 
console.log(allConstruct1("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])); 
console.log(allConstruct1("", ["cat", "dog", "mouse"])); 
console.log(allConstruct1("aaaa", ["a", "aa", "aaa"])); 

const allConstruct2 = (target,wordBank,memo = {}) => {
    if(target === ""){
        return [[]];
    }
    else if(target in memo){
        return memo[target];
    }
    else{
        let result = [];

        for(let word of wordBank){
            if(target.indexOf(word) === 0){
                const suffix = target.slice(word.length);

                const suffixWays  = allConstruct2(suffix,wordBank,memo);
                const targetWays = suffixWays.map(way => [word, ...way]);
                result.push(...targetWays);
            }
        }

        memo[target] = result;
        return result;
    }
};

console.log(allConstruct2("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); 
console.log(allConstruct2("purple", ["purp", "p", "ur", "le", "purpl"])); 
console.log(allConstruct2("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])); 
console.log(allConstruct2("", ["cat", "dog", "mouse"])); 
console.log(allConstruct2("aaaa", ["a", "aa", "aaa"]));
console.log(allConstruct2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])); 