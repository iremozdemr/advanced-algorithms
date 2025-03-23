import java.util.Arrays;
import java.util.Comparator;

public class FractionalKnapsack{

    public static double getMaxValue(Item[] items,int capacity){
        sortByFraction(items);

        double totalValue = 0.0;

        for(int i=0; i<items.length; i++){
            Item item = items[i];
            int profit = item.profit;
            int weight = item.weight;

            if(capacity > weight){
                capacity = capacity - weight;
                totalValue = totalValue + profit;
            }
            else{
                totalValue = totalValue + ((double) capacity / (double)weight * (double)profit);
                break;
            }
        }

        return totalValue;
    }

    public static void sortByFraction(Item[] items) {
        Arrays.sort(items, new Comparator<Item>() {
            @Override
            public int compare(Item item1, Item item2) {
                double fraction1 = (double) item1.profit / item1.weight;
                double fraction2 = (double) item2.profit / item2.weight;
                
                if (fraction2 > fraction1) return 1;
                else if (fraction2 < fraction1) return -1;
                else return 0;
            }
        });
    }
    
    public static void main(String[] args) {
        Item[] items = new Item[3];

        items[0] = new Item(60, 10);
        items[1] = new Item(100, 20);
        items[2] = new Item(120, 30);

        int capacity = 50;

        double totalValue = getMaxValue(items, capacity);

        System.out.println(totalValue);
    }
}

class Item{
    int profit;
    int weight;

    public Item(int profit,int weight){
        this.profit = profit;
        this.weight = weight;
    }
}