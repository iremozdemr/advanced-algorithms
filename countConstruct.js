//write a function countConstruct(target,wordBank) that accepts a target string and an array of strings
//the function should return the number of ways that the target can be constructed by concatenating elements of the wordBank array
//you may reuse elements of wordBank as many times as needed

const countConstruct1 = (target,wordBank) => {
    if(target === ""){
        return 1;
    }
    else{
        let totalCount = 0;

        for(let word of wordBank){
            if(target.indexOf(word) === 0){
                const suffix = target.slice(word.length);
                const result = countConstruct1(suffix,wordBank);
                totalCount += result;
            }
        }

        return totalCount;
    }
};
//m = target.length
//n = wordBank.length
//O((n^m)*m) time
//O(m*m) space

console.log(countConstruct1("abcdef", ["ab", "abc", "cd", "def", "abcd"])); 
console.log(countConstruct1("purple", ["purp", "p", "ur", "le", "purpl"])); 
console.log(countConstruct1("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])); 
console.log(countConstruct1("", ["cat", "dog", "mouse"])); 
console.log(countConstruct1("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); 

const countConstruct2 = (target,wordBank,memo = {}) => {
    if(target === ""){
        return 1;
    }
    else if(target in memo){
        return memo[target];
    }
    else{
        let totalCount = 0;

        for(let word of wordBank){
            if(target.indexOf(word) === 0){
                const suffix = target.slice(word.length);
                const result = countConstruct2(suffix,wordBank,memo);
                totalCount += result;
            }
        }

        memo[target] = totalCount;
        return totalCount;
    }
};
//m = target.length
//n = wordBank.length
//O(n*m*m) time
//O(m*m) space

console.log(countConstruct2("abcdef", ["ab", "abc", "cd", "def", "abcd"])); 
console.log(countConstruct2("purple", ["purp", "p", "ur", "le", "purpl"])); 
console.log(countConstruct2("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])); 
console.log(countConstruct2("", ["cat", "dog", "mouse"])); 
console.log(countConstruct2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); 
console.log(countConstruct2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])); 