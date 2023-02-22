import java.io.File;
import java.io.FileNotFoundException;
import java.util.Objects;
import java.util.Scanner;

public class Posled extends Thread {

    private final String[] filesNames;

    public Posled(String[] filesNames) {
        this.filesNames = filesNames;
    }

    public void run() {
        try {
            final Scanner file1Scanner = new Scanner(new File(filesNames[0]));
            final Scanner file2Scanner = new Scanner(new File(filesNames[1]));

            String file1Line;
            String file2Line;
            boolean isEndOfFiles;
            int currStringsNum = 1;

            long startMillis = System.currentTimeMillis();
            while (true) {
                if (file1Scanner.hasNextLine()) {
                    file1Line = file1Scanner.nextLine();
                } else {
                    file1Line = null;
                }

                if (file2Scanner.hasNextLine()) {
                    file2Line = file2Scanner.nextLine();
                } else {
                    file2Line = null;
                }

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

            file1Scanner.close();
            file2Scanner.close();

            long consumedMillis = finishMillis - startMillis;
            System.out.println("Consumed millis: " + consumedMillis);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
