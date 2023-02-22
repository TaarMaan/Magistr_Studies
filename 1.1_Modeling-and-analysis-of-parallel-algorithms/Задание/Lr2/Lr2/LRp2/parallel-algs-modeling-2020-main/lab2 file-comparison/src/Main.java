import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {

    public static final int LINES_NUM = 10;
    public static final int SYMBOLS_NUM =10;
    public static boolean SHOULD_IT_WORK_IN_PARALLEL = true;
    public static boolean SHOULD_IT_DELETE_FILES_AFTER_WORK = true;

    public static void main(String[] args) throws InterruptedException, IOException {

        System.out.println("Лабораторная работа №.2---Выполнил студент группы 6132 Артамонов В.А.");
        final String[] filesNames = createFiles(LINES_NUM, SYMBOLS_NUM);

        if (SHOULD_IT_WORK_IN_PARALLEL) {
            parallel(filesNames);
        } else {
            sequential(filesNames);
        }
        if (SHOULD_IT_DELETE_FILES_AFTER_WORK) {
            Files.deleteIfExists(Paths.get(filesNames[0]));
            Files.deleteIfExists(Paths.get(filesNames[1]));
        }
    }

    private static String[] createFiles(int linesNum, int symbolsNum) {

        final String file1Name = "file1-" + linesNum + "x" + symbolsNum + ".txt";
        final String file2Name = "file2-" + linesNum + "x" + symbolsNum + ".txt";

        try (PrintWriter writer1 = new PrintWriter(file1Name, StandardCharsets.UTF_8);
             PrintWriter writer2 = new PrintWriter(file2Name, StandardCharsets.UTF_8)) {

            String strToWrite = "a".repeat(symbolsNum);

            for (int rowIndex = 0; rowIndex < linesNum - 1; ++rowIndex) {
                writer1.println(strToWrite);
                writer2.println(strToWrite);
            }

            writer1.println("chtoto drugoe");
            writer2.println("chtoto inoe");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return new String[]{file1Name, file2Name};
    }

    private static void parallel(String[] filesNames) throws InterruptedException {
        Signal potok1 = new Signal(filesNames[0]);
        Signal potok2 = new Signal(filesNames[1]);
        Parallel parallel = new Parallel(potok1, potok2);

        potok1.start();
        potok2.start();
        parallel.start();
        
        potok1.join();
        potok2.join();
        parallel.join();
    }

    private static void sequential(String[] filesNames) throws InterruptedException {
        Posled posled = new Posled(filesNames);
        posled.start();
        posled.join();
    }
}
