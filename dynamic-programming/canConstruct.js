let target1 = "abcdef"
let wordBank1 = ["ab", "abc", "cd", "def", "abcd"];

for(let word of wordBank1){
    console.log("indexOf " + word + ":",target1.indexOf(word));
}

let target2 = "abcdef"
let wordBank2 = ["ab", "abc", "cd", "def", "abcd"];

console.log("slice: -2",target2.slice(-2));
console.log("slice: -1",target2.slice(-1));
console.log("slice: 0",target2.slice(0));
console.log("slice: 1",target2.slice(1));
console.log("slice: 2",target2.slice(2));
console.log("slice: 3",target2.slice(3));
console.log("slice: 4",target2.slice(4));
console.log("slice: 5",target2.slice(5));
console.log("slice: 6",target2.slice(6));
console.log("slice: 7",target2.slice(7));
console.log("slice: 8",target2.slice(8));

//write a function canConstruct(target,wordBank) that accepts a target string and an array of strings
//the function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array
//you may reuse elements of wordBank as many times as needed

const canConstruct1 = (target,wordBank) => {
    if(target === ""){
        return true;
    }
    else{
        for(let word of wordBank){
            if(target.indexOf(word) === 0){
                const suffix = target.slice(word.length);

                if(canConstruct1(suffix,wordBank)){
                    return true;
                }
            }
        }

        return false;
    }
};
//m = target.length
//n = wordBank.length
//O((n^m)*m) time
//O(m*m) space

console.log(canConstruct1("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct1("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])); 
console.log(canConstruct1("", ["cat", "dog", "mouse"])); 
console.log(canConstruct1("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));

const canConstruct2 = (target,wordBank,memo = {}) => {
    if(target === ""){
        return true;
    }
    else if(target in memo){
        return memo[target];
    }
    else{
        for(let word of wordBank){
            if(target.indexOf(word) === 0){
                const suffix = target.slice(word.length);

                if(canConstruct2(suffix,wordBank,memo)){
                    memo[target] = true;
                    return true;
                }
            }
        }

        memo[target] = false;
        return false;
    }
};
//m = target.length
//n = wordBank.length
//O(n*m*m) time
//O(m*m) space

console.log(canConstruct2("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct2("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])); 
console.log(canConstruct2("", ["cat", "dog", "mouse"])); 
console.log(canConstruct2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]));

const canConstruct3 = (target,wordBank) => {
    const array = Array(target.length+1).fill(false);
    array[0] = true;

    for(let i=0; i<array.length; i++){
        if(array[i] === true){
            for(let word of wordBank){
                const index = i + word.length;
                if(target.slice(i,index) === word){
                    array[index] = true;
                }
            }
        }
    }

    return array[target.length];
};
//m = target.length
//n = wordBank.length
//O(n*m*m) time
//O(m) space

console.log(canConstruct3("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct3("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])); 
console.log(canConstruct3("", ["cat", "dog", "mouse"])); 
console.log(canConstruct3("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct3("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]));