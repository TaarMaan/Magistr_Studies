import java.util.Objects;

public class Parallel extends Thread {

    private final Signal file1;
    private final Signal file2;

    public Parallel(Signal file1, Signal file2) {
        this.file1 = file1;
        this.file2 = file2;
    }

    public void run() {

        String file1Line;
        String file2Line;
        boolean isEndOfFiles;
        int currStringsNum = 1;

        long startMillis = System.currentTimeMillis();
        while (true) {
            file1.runReadLine();
            file2.runReadLine();

            file1Line = file1.currLine();
            file2Line = file2.currLine();

            isEndOfFiles = file1Line == null & file2Line == null;
            if (isEndOfFiles) {
                break;
            }

            if (!Objects.equals(file1Line, file2Line)) {
                System.out.println("#" + currStringsNum + ":\n" +
                        "v faile 1 stroka = " + file1Line + "\n" +
                        "v faile 2 stroka = " + file2Line + "\n");
            }

            currStringsNum++;
        }
        long finishMillis = System.currentTimeMillis();

        file1.finish();
        file2.finish();

        long consumedMillis = finishMillis - startMillis;
        System.out.println("Consumed millis: " + consumedMillis);
    }
}
