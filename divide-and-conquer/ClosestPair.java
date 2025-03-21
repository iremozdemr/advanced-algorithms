import java.util.Arrays;
import java.util.Comparator;

public class ClosestPair {
    public static void main(String[] args) {

        Point[] P = new Point[]{
            new Point(2, 3),
            new Point(12, 30),
            new Point(40, 50),
            new Point(5, 1),
            new Point(12, 10),
            new Point(3, 4)
        };
   
        System.out.println("the smallest distance is " + Point.closest(P, P.length));
    }
   
}

class Point{
    public int x;
    public int y;

    public Point(int x,int y){
        this.x = x;
        this.y = y;
    }

    public static float distance(Point p1,Point p2){
        return (float) Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
    }

    public static float bruteForce(Point[] P, int n) {
        float min = Float.MAX_VALUE;
        float current = 0;
     
        for (int i=0; i<n; i++) {
          for (int j=i+1; j<n; j++) {
            current = distance(P[i],P[j]);
            if(current < min){
                min = current;
            }
          }
        }

        return min;
    }

    public static float stripClosest(Point[] strip, int size, float d) {
        float min = d; 
     
        Arrays.sort(strip, 0, size, new PointYComparator());
     
        for (int i = 0; i < size; ++i) {
          for (int j = i + 1; j < size && (strip[j].y - strip[i].y) < min; ++j) {
            if (distance(strip[i], strip[j]) < min) {
              min = distance(strip[i], strip[j]);
            }
          }
        }
     
        return min;
    }

    public static float closest(Point[] P, int n) {
        Arrays.sort(P, 0, n, new PointXComparator());
     
        return closestHelper(P, 0, n);
    }

    public static float closestHelper(Point[] P, int startIndex, int endIndex){
     
        if ((endIndex - startIndex) <= 3) {
            return bruteForce(P, endIndex);
        }
    
        int middle = startIndex + (endIndex - startIndex) / 2;
        Point midPoint = P[middle];
 
        float dl = closestHelper(P, startIndex, middle);
        float dr = closestHelper(P, middle, endIndex);
 
        float d = Math.min(dl, dr);

        Point[] strip = new Point[endIndex];
        //build an array strip[]
        //that contains points closer than d to the line passing through the middle point

        int j = 0;
        for (int i = 0; i < endIndex; i++) {
            if (Math.abs(P[i].x - midPoint.x) < d) {
                strip[j] = P[i];
                j++;
            }
        }
    
        return Math.min(d, stripClosest(strip, j, d));
    }
}

class PointXComparator implements Comparator<Point> {
 
    @Override
    public int compare(Point pointA, Point pointB) {
      return Integer.compare(pointA.x, pointB.x);
    }
   
}
//point'leri x eksenine göre sort etmek için
   
class PointYComparator implements Comparator<Point> {
   
    @Override
    public int compare(Point pointA, Point pointB) {
      return Integer.compare(pointA.y, pointB.y);
    }
   
}
//point'leri y eksenine göre sort etmek için