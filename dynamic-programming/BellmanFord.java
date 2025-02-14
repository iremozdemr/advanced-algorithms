//given a weighted graph with 
//v vertices 
//e edges
//a source vertex src
//find the shortest path from the source vertex to all vertices in the given graph

//if a vertex cannot be reached from source vertex mark its distance as 10^8

//if a graph contains negative weight cycle return -1
//in the presence of negative weight cycle in the graph the shortest path doesn’t exist because with each traversal of the cycle shortest path keeps decreasing

import java.util.Arrays;

public class BellmanFord {
    public static void main(String[] args) {
        int vertices = 5;

        int[][] edges = new int[][] {
            {1, 3, 2},
            {4, 3, -1},
            {2, 4, 1},
            {1, 2, 1},
            {0, 1, 5}
        };

        int src = 0;

        int[] result = bellmanFord(vertices,edges,src);

        for(int i=0; i<result.length; i++){
            System.out.println(result[i]);
        }
    }

    public static int[] bellmanFord(int vertices,int[][] edges,int src){
        int[] distances = new int[vertices];
        Arrays.fill(distances,(int) 1e8);
        distances[src] = 0;

        for(int i=0; i<vertices; i++){
            for(int[] edge : edges){
                int u = edge[0];
                int v = edge[1];
                int weight = edge[2];

                if(distances[u] != 1e8 && distances[u] + weight < distances[v]){
                    if(i == vertices-1){
                        int[] result = {-1};
                        return result;
                    }
                    else{
                        distances[v] = distances[u] + weight;
                    }
                }
            }
        }

        return distances;
    }
}