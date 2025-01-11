//dynamic programming is a commonly used algorithmic technique 
//used to optimize recursive solutions when same subproblems are called again

//dynamic programming is used for solving problems that consists of the following characteristics:
//-optimal substructure
//-overlapping subproblems

//memoization = top down approach:
//we keep the solution recursive and add a memoization table to avoid repeated calls of same subproblems
//-before making any recursive call we first check if the memoization table already has solution for it
//-after the recursive call is over we store the solution in the memoization table

//tabulation = bottom up approach:
//we start with the smallest subproblems and gradually build up to the final solution
//-we write an iterative solution (avoid recursion overhead) and build the solution in bottom-up manner
//-we use a dp table where we first fill the solution for base cases and then fill the remaining entries of the table using recursive formula
//-we only use recursive formula on table entries and do not make recursive calls

import java.util.Arrays;

public class Fibonacci{
    public static void main(String[] args) {
        System.out.println(fibonacci(5));
        System.out.println(fibonacciMemoization(5));
        System.out.println(fibonacciTabulation(5));
        System.out.println(fibonacciSpaceOptimised(5));
    }

    public static int fibonacci(int n){
        if(n == 0){
            return 0;
        }
        else if(n == 1){
            return 1;
        }
        else{
            return fibonacci(n-1) + fibonacci(n-2);
        }
    }

    public static int fibonacciMemoizationHelper(int n,int[] memo){
        if(n == 0){
            return 0;
        }
        else if(n == 1){
            return 1;
        }
        else if(memo[n] != -1){
            return memo[n];
        }
        else{
            int result = fibonacciMemoizationHelper(n-1, memo) + fibonacciMemoizationHelper(n-2, memo);
            memo[n] = result;
            return memo[n];
        }
    }

    public static int fibonacciMemoization(int n){
        int[] memo = new int[n+1];
        Arrays.fill(memo, -1);
        return fibonacciMemoizationHelper(n, memo);
    }

    public static int fibonacciTabulation(int n){
        int[] array = new int[n+1];
        array[0] = 0;
        array[1] = 1;

        for(int i=2; i<array.length; i++){
            array[i] = array[i-1] + array[i-2];
        }

        return array[n];
    }

    public static int fibonacciSpaceOptimised(int n){
        if(n == 0){
            return 0;
        }
        if(n == 1){
            return 1;
        }
        
        int prevPrev = 0;
        int prev = 1; 
        int current = 0;

        for(int i=2; i<=n; i++){
            current = prev + prevPrev;
            prevPrev = prev;
            prev = current;
        }

        return current;
    }
}