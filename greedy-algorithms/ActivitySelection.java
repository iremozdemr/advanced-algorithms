import java.util.ArrayList;

public class ActivitySelection {

    public static int selectActivities(ArrayList<Integer> startTimes,ArrayList<Integer> finishTimes){
        int length = startTimes.size();

        ArrayList<Activity> activities = new ArrayList<>();
        for (int i = 0; i < length; i++) {
            activities.add(new Activity(startTimes.get(i), finishTimes.get(i)));
        }

        sortActivitiesByFinishTime(activities);

        int count = 1;
        //ilk aktivite seçilir

        int lastSelectedFinishTime = activities.get(0).finishTime;
        //ilk aktivitenin bitiş zamanı alınır

        for (int i = 1; i < length; i++) {
            if (activities.get(i).startTime >= lastSelectedFinishTime) {
                count++;
                lastSelectedFinishTime = activities.get(i).finishTime;
            }
        }

        return count;
    }

    public static void sortActivitiesByFinishTime(ArrayList<Activity> activities) {
        for (int i = 0; i < activities.size() - 1; i++) {
            for (int j = 0; j < activities.size() - i - 1; j++) {
                if (activities.get(j).finishTime > activities.get(j + 1).finishTime) {
                    Activity temp = activities.get(j);
                    activities.set(j, activities.get(j + 1));
                    activities.set(j + 1, temp);
                }
            }
        }
    }
    
    public static void main(String[] args) {
        ArrayList<Integer> startTimes = new ArrayList<>();
        ArrayList<Integer> finishTimes = new ArrayList<>();

        startTimes.add(1);
        startTimes.add(2);
        startTimes.add(3);
        startTimes.add(6);

        finishTimes.add(3);
        finishTimes.add(5);
        finishTimes.add(9);
        finishTimes.add(8);

        int maxActivities = selectActivities(startTimes, finishTimes);
        System.out.println(maxActivities);
    }
}

class Activity {
    int startTime;
    int finishTime;

    public Activity(int startTime, int finishTime) {
        this.startTime = startTime;
        this.finishTime = finishTime;
    }
}