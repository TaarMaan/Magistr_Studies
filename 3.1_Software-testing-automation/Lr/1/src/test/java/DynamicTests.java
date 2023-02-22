import org.example.LrT1.Num;
import org.example.LrT1.Operations;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

public class DynamicTests extends Operations {
    private void buildTestsFromFile(Collection<DynamicTest> tests, String fileName) {
        try (BufferedReader in = new BufferedReader(new FileReader(fileName))) {
            String line;
            in.readLine();

            String[] cells;
            int num1;
            int num2;
            int expectedSum;
            int expectedMinus;
            int expectedDiv;
            int expectedMul;
            int system;

            while ((line = in.readLine()) != null) {
                cells = line.split(",");
                num1 = Integer.parseInt(cells[0]);
                num2 = Integer.parseInt(cells[1]);

                expectedSum = Integer.parseInt(cells[2]);
                expectedMinus = Integer.parseInt(cells[3]);
                expectedDiv = Integer.parseInt(cells[4]);
                expectedMul = Integer.parseInt(cells[5]);
                system = Integer.parseInt(cells[6]);

                tests.add(buildTest(num1, num2, '+', expectedSum, system));
                tests.add(buildTest(num1, num2, '-', expectedMinus, system));
                tests.add(buildTest(num1, num2, '/', expectedDiv, system));
                tests.add(buildTest(num1, num2, '*', expectedMul, system));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private DynamicTest buildTest(final int num1, final int num2, final char operator, final int expected, int system) {
        String displayName = String.format("%s %s %s = %s, Система счисления: %s", num1, operator, num2, expected, system);
        Num numbers = new Num();
        numbers.setNum1(num1);
        numbers.setNum2(num2);

        return dynamicTest(displayName, () -> {
            int res = Operations.calculate(numbers, operator, system);
            assertEquals(expected, resFormat(res, system));
        });
    }

    public static int resFormat(int res, int system) {
        return Integer.parseInt(Integer.toString(res, system));
    }

    @DisplayName("Динамический тест")
    @TestFactory
    Collection<DynamicTest> runDynamicTest() {
        Collection<DynamicTest> tests = new ArrayList<>();

        Path currRelativePath = Paths.get("");
        String currFolder = currRelativePath.toAbsolutePath().toString();
        File folder = new File(currFolder);
        String[] folderContent = folder.list();

        for (String file : folderContent) {
            if (file.endsWith(".csv")) {
                buildTestsFromFile(tests, file);
            }
        }

        return tests;
    }
}