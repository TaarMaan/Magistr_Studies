package org.example.LrT1;

public class Operations {
    public static int plus(Num num) {
        int res = num.getNum1() + num.getNum2();
        return res;
    }

    public static int minus(Num num) {
        int res = num.getNum1() - num.getNum2();
        return res;
    }

    public static int multiplication(Num num) {
        int res = num.getNum1() * num.getNum2();
        return res;
    }

    public static int division(Num num) {
        int res = num.getNum1() / num.getNum2();
        return res;
    }

    public static Num convert(int num1, int num2, int system) {
        Num num = new Num();
        if (system == 2) {
            num.setNum1(num.toBinary(num1));
            num.setNum2(num.toBinary(num2));
        }
        if (system == 8) {
            num.setNum1(num.toOctalString(num1));
            num.setNum2(num.toOctalString(num2));
        }
        if (system == 16) {
            num.setNum1(num.toHexString(num1));
            num.setNum2(num.toHexString(num2));
        }
        if (system == 10) {
            num.setNum1(num1);
            num.setNum2(num2);
        }
        return num;
    }

    public static int calculate(Num num, char op, int system) {
        int result = 0;
        switch (op) {
            case '+':
                result = plus(convert(num.getNum1(), num.getNum2(), system));
                break;
            case '-':
                result = minus(convert(num.getNum1(), num.getNum2(), system));
                break;
            case '*':
                result = multiplication(convert(num.getNum1(), num.getNum2(), system));
                break;
            case '/':
                result = division(convert(num.getNum1(), num.getNum2(), system));
                break;
        }
        System.out.print("\nРезультат:\n");
        System.out.printf(num.getNum1() + " " + op + " " + num.getNum2() + " = " + Integer.toString(result, system));
        return result;
    }
}