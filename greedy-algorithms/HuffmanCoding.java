import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Scanner;

public class HuffmanCoding{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); 

        int n = 6; 
        char[] array = { 'a', 'b', 'c', 'd', 'e', 'f' }; 
        int[] frequency = { 5, 9, 12, 13, 16, 45 }; 

        MyComparator comparator = new MyComparator();

        PriorityQueue<HuffmanNode> queue = new PriorityQueue<HuffmanNode>(n,comparator);

        for(int i=0; i<n; i++){
            HuffmanNode node = new HuffmanNode();

            node.character = array[i];
            node.data = frequency[i];

            node.left = null;
            node.right = null;

            queue.add(node);
        }

        HuffmanNode root = null;

        while(queue.size() > 1){
            HuffmanNode x = queue.peek();
            queue.poll();

            HuffmanNode y = queue.peek();
            queue.poll();

            HuffmanNode f = new HuffmanNode();

            f.data = x.data + y.data;
            f.character = '-';

            f.left = x;
            f.right = y;

            root = f;

            queue.add(f);
        }

        String string = "";
        printCode(root,string);
    }

    public static void printCode(HuffmanNode root, String s){
        if(root.left == null && root.right == null && Character.isLetter(root.character)){
            System.out.println(root.character + ":" + s);
            return;
        }
        else{
            printCode(root.left,s + "0");
            printCode(root.right,s + "1");
        }
    }
}

class HuffmanNode{
    int data;
    char character;

    HuffmanNode left;
    HuffmanNode right;
}

class MyComparator implements Comparator<HuffmanNode>{

    @Override
    public int compare(HuffmanNode x, HuffmanNode y) {
        return x.data - y.data;
    }
    
}