//memoization:
//1- visualize the problem as a tree
//2- implement thr tree using recursion
//3- test it
//4- add a memo object
//5- add a base case to return memo values
//6- store return values into the memo

console.log("hello");

const foo = (n) => {
    if(n <= 1) return;
    foo(n-1);
};
//O(n) time
//O(n) space

const bar = (n) => {
    if(n <= 1) return;
    bar(n-2);
};
//O(n) time
//O(n) space

const dib = (n) => {
    if(n <= 1) return;
    dib(n-1);
    dib(n-1);
}
//O(2^n) time
//O(n) space

const lib = (n) => {
    if(n <= 1) return;
    lib(n-2);
    lib(n-2);
}
//O(2^n) time
//O(n) space

const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
};
//O(2^n) time
//O(n) space

//O(dib) <= O(fib) <= O(lib)
//O(2^n) <= O(fib) <= O(2^n)
//O(fib) = O(2^n)