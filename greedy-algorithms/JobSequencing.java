import java.util.Arrays;

public class JobSequencing {

    public static int jobSchedulingMaxProfit(Job[] jobs){
        sortJobsByProfit(jobs);

        int maxDeadline = 0;

        for(int i=0; i<jobs.length; i++){
            Job job = jobs[i];

            if(job.deadline > maxDeadline){
                maxDeadline = job.deadline;
            }
        }

        int[] schedule = new int[maxDeadline + 1];
        //zaman çizelgesi oluştur

        Arrays.fill(schedule,-1);

        int totalProfit = 0;
        int totalJobCount = 0;

        for(int i=0; i<jobs.length; i++){
            Job job = jobs[i];

            for(int j=job.deadline; j>0; j--){
                if(schedule[j] == -1){
                    schedule[j] = job.id;
                    totalProfit += job.profit;
                    totalJobCount++;
                    break;
                }
            }
        }

        return totalProfit;
    }

    public static void sortJobsByProfit(Job[] jobs) {
        int n = jobs.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (jobs[j].profit < jobs[j + 1].profit) {
                    Job temp = jobs[j];
                    jobs[j] = jobs[j + 1];
                    jobs[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        Job[] jobs = new Job[5];

        jobs[0] = new Job(1,2,100);
        jobs[1] = new Job(2,1,19);
        jobs[2] = new Job(3,2,27);
        jobs[3] = new Job(4,1,25);
        jobs[4] = new Job(5,1,15);

        int maxProfit = jobSchedulingMaxProfit(jobs);

        System.out.println(maxProfit);
    }
}

class Job{
    int id;
    int deadline;
    int profit;

    public Job(int id, int deadline, int profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}