//given two strings s1 and s2
//the task is to find the length of the longest common subsequence
//if there is no common subsequence return 0

//a subsequence is a string generated from the original string by deleting 0 or more characters and without changing the relative order of the remaining characters
//subsequences of abc are “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”
//a string of length n has 2^n subsequences

//s1 = "abc"
//s2 = "acd"
//"ac"

//s1 = "aggtab"
//s2 = "gxtxayb"
//"gtab"

//s1 = "abc"
//s2 = "cba"
//"a" "b" "c"

import java.util.Arrays;

public class LongestCommonSubsequence {
    public static void main(String[] args) {
        String s1 = "aggtab";
        String s2 = "gxtxayb";

        int result1 = recursion1(s1,s2);
        System.out.println(result1);

        int result2 = recursion2(s1,s2,s1.length(),s2.length());
        System.out.println(result2);

        int[][] memo = new int[s1.length() + 1][s2.length() + 1];
        for (int i = 0; i <= s1.length(); i++) {
            Arrays.fill(memo[i], -1);
        }
        int result3 = memoization(s1,s2,s1.length(),s2.length(),memo);
        System.out.println(result3);

        int result4 = tabulation(s1,s2);
        System.out.println(result4);
    }

    public static int recursion1(String s1,String s2){
        if(s1.length() == 0 || s2.length() == 0){
            return 0;
        }
        else{
            int length1 = s1.length();
            int length2 = s2.length();

            String newS1 = s1.substring(0,length1-1);
            String newS2 = s2.substring(0,length2-1);

            if(s1.charAt(length1-1) == s2.charAt(length2-1)){
                return 1 + recursion1(newS1,newS2);
            }
            else{
                return Math.max(recursion1(s1, newS2),recursion1(newS1, s2));
            }
        }
    }

    public static int recursion2(String s1,String s2,int length1,int length2){
        if(length1 == 0 || length2 == 0){
            return 0;
        }
        else{
            if(s1.charAt(length1-1) == s2.charAt(length2-1)){
                return 1 + recursion2(s1,s2,length1-1,length2-1);
            }
            else{
                return Math.max(recursion2(s1,s2,length1,length2-1),recursion2(s1,s2,length1-1,length2));
            }
        }
    }

    public static int memoization(String s1,String s2,int length1,int length2,int[][] memo){
        if(length1 == 0 || length2 == 0){
            return 0;
        }
        else if(memo[length1][length2] != -1){
            return memo[length1][length2];
        }
        else{
            if(s1.charAt(length1-1) == s2.charAt(length2-1)){
                memo[length1][length2] = 1 + memoization(s1,s2,length1-1,length2-1,memo);
                return memo[length1][length2];
            }
            else{
                memo[length1][length2] = Math.max(memoization(s1,s2,length1,length2-1,memo),memoization(s1,s2,length1-1,length2,memo));
                return memo[length1][length2];
            }
        }
    }

    public static int tabulation(String s1,String s2){
        int[][] array = new int[s1.length()+1][s2.length()+1];
            
        for(int i=1; i<array.length; i++){
            for(int j=1; j<array[0].length; j++){
                if(s1.charAt(i-1) == s2.charAt(j-1)){
                    array[i][j] = array[i-1][j-1] + 1;
                }
                else{
                    int max = Math.max(array[i-1][j],array[i][j-1]);
                    array[i][j] = max;
                }
            }
        }

        return array[s1.length()][s2.length()];
    }
}