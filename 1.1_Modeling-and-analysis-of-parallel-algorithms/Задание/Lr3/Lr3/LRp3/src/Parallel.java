import java.util.ArrayList;
import java.util.List;

public class Parallel {

    private static final int MinProstoeChislo = 2;
    private static final int MinPotok = 1;
    private static final int MaxPotok = 64;

    public static ArrayList<Integer> primes(final int lastNumber, final int threadsNum) {

        if (lastNumber < MinProstoeChislo) {
            throw new IndexOutOfBoundsException();
        }
        if (threadsNum < MinPotok || threadsNum > MaxPotok) {
            throw new IllegalArgumentException();
        }

        List<Thread> threads = new ArrayList<>(threadsNum);

        ArrayList<Integer> primes = new ArrayList<Integer>(lastNumber / 2);
        primes.add(2);

        int[][] ranges = ranges(lastNumber, threadsNum);

        long startMillis = System.currentTimeMillis();
        Thread currThread;
        for (int[] range : ranges) {
            currThread = new ProverkaNaProstoe(primes, range[0], range[1]);
            currThread.start();
            threads.add(currThread);
        }

        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        long finishMillis = System.currentTimeMillis();
        long consumedMillis = finishMillis - startMillis;
        System.out.println("Consumed millis: " + consumedMillis);
        return primes;
    }

    private static int[][] ranges(int lastNumber, int threadsNum) {

        float lowLimit = 2.0f;
        float partition = (lastNumber - lowLimit) / threadsNum;
        if (partition < 1.0) {
            throw new IllegalArgumentException();
        }

        int[][] ranges = new int[threadsNum][2];

        ranges[0][0] = Math.round(lowLimit);
        for (int rowIndex = 0; rowIndex < threadsNum - 1; rowIndex++) {
            lowLimit += partition;
            ranges[rowIndex][1] = Math.round(lowLimit);
            ranges[rowIndex + 1][0] = ranges[rowIndex][1] + 1;
        }
        ranges[threadsNum - 1][1] = lastNumber;

        return ranges;
    }
}
