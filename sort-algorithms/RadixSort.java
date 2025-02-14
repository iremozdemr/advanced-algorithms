public class RadixSort {
    public static void main(String[] args) {
        int inputArray[] = { 170, 45, 75, 90, 802, 24, 2, 66 };
        printArray(inputArray);

        radixSort(inputArray);
        printArray(inputArray);
    }

    public static void radixSort(int[] array){
        int maximumNumber = array[0];

        for(int i=0; i<array.length; i++){
            if(array[i] > maximumNumber){
                maximumNumber = array[i];
            }
        }

        String string = "" + maximumNumber;
        int digitCount = string.length();

        for(int i=0; i<digitCount; i++){
            countingSort(array,i);
        }
    }

    public static void countingSort(int inputArray[],int digit){
        int[] outputArray = new int[inputArray.length];
        int[] countArray = new int[10];

        for(int i=0; i<inputArray.length; i++){
            int index = (inputArray[i] / (int) Math.pow(10, digit)) % 10;
            countArray[index]++;
        }

        for(int i=1; i<countArray.length; i++){
            countArray[i] = countArray[i] + countArray[i-1];
        }

        for(int i=inputArray.length-1; i>=0; i--){
            int number = (inputArray[i] / (int) Math.pow(10, digit)) % 10; 
            int newIndex = countArray[number] - 1;
            outputArray[newIndex] = inputArray[i]; 
            countArray[number]--;
        }

        for(int i=0; i<outputArray.length; i++){
            inputArray[i] = outputArray[i];
        }
    }

    public static void printArray(int[] array){
        for(int i=0; i<array.length; i++){
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
}