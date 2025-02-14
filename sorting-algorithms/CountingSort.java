public class CountingSort {
    public static void main(String[] args) {
        int[] inputArray = {4, 3, 12, 1, 5, 5, 3, 9};
        int[] outputArray = countingSort(inputArray);

        printArray(inputArray);
        printArray(outputArray);
    }

    public static int[] countingSort(int[] inputArray){
        int[] outputArray = new int[inputArray.length];
        int maximumNumber = inputArray[0];

        for(int i=0; i<inputArray.length; i++){
            if(inputArray[i] > maximumNumber){
                maximumNumber = inputArray[i];
            }
        }
        int[] countArray = new int[maximumNumber+1];

        for(int i=0; i<inputArray.length; i++){
            int index = inputArray[i];
            countArray[index]++;
        }

        for(int i=1; i<countArray.length; i++){
            countArray[i] = countArray[i] + countArray[i-1];
        }

        for(int i=inputArray.length-1; i>=0; i--){
            int number = inputArray[i];
            int newIndex = countArray[number]-1;
            outputArray[newIndex] = number;
            countArray[number]--;
        }
        
        return outputArray;
    }

    public static void printArray(int[] array){
        for(int i=0; i<array.length; i++){
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
}