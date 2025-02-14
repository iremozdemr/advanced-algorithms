import java.util.ArrayList;

public class BucketSort {
    public static void main(String[] args) {
        float inputArray[] = {0.897f, 0.565f, 0.656f, 0.1234f, 0.665f, 0.3434f};
        printArray(inputArray);

        bucketSort(inputArray);
        printArray(inputArray);
    }

    public static void bucketSort(float inputArray[]){
        int n = inputArray.length;
        ArrayList<Float>[] buckets = new ArrayList[n];

        for(int i=0; i<buckets.length; i++){
            buckets[i] = new ArrayList<Float>();
        }

        for(int i=0; i<inputArray.length; i++){
            float number = inputArray[i]*n;
            int index = (int) number;
            buckets[index].add(inputArray[i]);
        }

        for(int i=0; i<buckets.length; i++){
            insertionSort(buckets[i]);
        }

        int index = 0;
        for(int i=0; i<buckets.length; i++){
            for(int j=0; j<buckets[i].size(); j++){
                inputArray[index] = buckets[i].get(j);
                index++;
            }
        }
    }

    public static void insertionSort(ArrayList<Float> bucket) {
        for (int i = 1; i < bucket.size(); ++i) {
            float key = bucket.get(i);
            int j = i - 1;
            while (j >= 0 && bucket.get(j) > key) {
                bucket.set(j + 1,bucket.get(j));
                j--;
            }
            bucket.set(j + 1,key);
        }
    }

    public static void printArray(float[] array){
        for(int i=0; i<array.length; i++){
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
}