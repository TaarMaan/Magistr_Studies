import org.example.LrT1.Num;
import org.example.LrT1.Operations;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ParameterizedTests extends Operations {
    Num num = new Num();

    @ParameterizedTest
    @DisplayName("Двоичная операция суммы")
    @CsvFileSource(resources = "/plus/plusForBinary.csv", numLinesToSkip = 1)
    void plusForBinary(int num1, int num2, int res) {
        num.setNum1(Num.toBinary(num1));
        num.setNum2(Num.toBinary(num2));
        int result = plus(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 2));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Двоичная операция деления")
    @CsvFileSource(resources = "/division/divisionForBinary.csv", numLinesToSkip = 1)
    void divisionForBinary(int num1, int num2, int res) {
        num.setNum1(Num.toBinary(num1));
        num.setNum2(Num.toBinary(num2));
        int result = division(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 2));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Двоичная операция разности")
    @CsvFileSource(resources = "/minus/minusForBinary.csv", numLinesToSkip = 1)
    void minusForBinary(int num1, int num2, int res) {
        num.setNum1(Num.toBinary(num1));
        num.setNum2(Num.toBinary(num2));
        int result = minus(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 2));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Двоичная операция умножения")
    @CsvFileSource(resources = "/multiplication/multiForBinary.csv", numLinesToSkip = 1)
    void multiForBinary(int num1, int num2, int res) {
        num.setNum1(Num.toBinary(num1));
        num.setNum2(Num.toBinary(num2));
        int result = multiplication(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 2));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Восьмеричная операция суммы")
    @CsvFileSource(resources = "/plus/plusForOctal.csv", numLinesToSkip = 1)
    void plusForOctal(int num1, int num2, int res) {
        num.setNum1(Num.toOctalString(num1));
        num.setNum2(Num.toOctalString(num2));
        int result = plus(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 8));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Восьмеричная операция деления")
    @CsvFileSource(resources = "/division/divisionForOctal.csv", numLinesToSkip = 1)
    void divisionForOctal(int num1, int num2, int res) {
        num.setNum1(Num.toOctalString(num1));
        num.setNum2(Num.toOctalString(num2));
        int result = division(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 8));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Восьмеричная операция разности")
    @CsvFileSource(resources = "/minus/minusForOctal.csv", numLinesToSkip = 1)
    void minusForOctal(int num1, int num2, int res) {
        num.setNum1(Num.toOctalString(num1));
        num.setNum2(Num.toOctalString(num2));
        int result = minus(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 8));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Восьмеричная операция умножения")
    @CsvFileSource(resources = "/multiplication/multiForOctal.csv", numLinesToSkip = 1)
    void multiForOctal(int num1, int num2, int res) {
        num.setNum1(Num.toOctalString(num1));
        num.setNum2(Num.toOctalString(num2));
        int result = multiplication(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 8));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Шестнадцатиричная операция суммы")
    @CsvFileSource(resources = "/plus/plusForHex.csv", numLinesToSkip = 1)
    void plusForHex(int num1, int num2, int res) {
        num.setNum1(Num.toHexString(num1));
        num.setNum2(Num.toHexString(num2));
        int result = plus(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 16));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Шестнадцатиричная операция деления")
    @CsvFileSource(resources = "/division/divisionForHex.csv", numLinesToSkip = 1)
    void divisionForHex(int num1, int num2, int res) {
        num.setNum1(Num.toHexString(num1));
        num.setNum2(Num.toHexString(num2));
        int result = division(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 16));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Шестнадцатиричная операция разности")
    @CsvFileSource(resources = "/minus/minusForHex.csv", numLinesToSkip = 1)
    void minusForHex(int num1, int num2, int res) {
        num.setNum1(Num.toHexString(num1));
        num.setNum2(Num.toHexString(num2));
        int result = minus(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 16));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Шестнадцатиричная операция умножения")
    @CsvFileSource(resources = "/multiplication/multiForHex.csv", numLinesToSkip = 1)
    void multiForHex(int num1, int num2, int res) {
        num.setNum1(Num.toHexString(num1));
        num.setNum2(Num.toHexString(num2));
        int result = multiplication(num);
        int actualValue = Integer.parseInt(Integer.toString(result, 16));
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Десятичная операция суммы")
    @CsvFileSource(resources = "/plus/plusForDecimal.csv", numLinesToSkip = 1)
    void plusForDecimal(int num1, int num2, int res) {
        num.setNum1(num1);
        num.setNum2(num2);
        int actualValue = plus(num);
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Десятичная операция деления")
    @CsvFileSource(resources = "/division/divisionForDecimal.csv", numLinesToSkip = 1)
    void divisionForDecimal(int num1, int num2, int res) {
        num.setNum1(num1);
        num.setNum2(num2);
        int actualValue = division(num);
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Десятичная операция разности")
    @CsvFileSource(resources = "/minus/minusForDecimal.csv", numLinesToSkip = 1)
    void minusForDecimal(int num1, int num2, int res) {
        num.setNum1(num1);
        num.setNum2(num2);
        int actualValue = minus(num);
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Десятичная операция умножения")
    @CsvFileSource(resources = "/multiplication/multiForDecimal.csv", numLinesToSkip = 1)
    void multiForDecimal(int num1, int num2, int res) {
        num.setNum1(num1);
        num.setNum2(num2);
        int actualValue = multiplication(num);
        assertEquals(res, actualValue);
    }

    @ParameterizedTest
    @DisplayName("Проверка исключения")
    @CsvFileSource(resources = "/zeroTest.csv", numLinesToSkip = 1)
    void divisionTest(int num1, int num2) {
        num.setNum1(num1);
        num.setNum2(num2);
        assertThrows(ArithmeticException.class, () -> division(num));
    }
}