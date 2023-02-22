package org.example.LrT1;

import java.util.Scanner;

public class Calculator extends Operations {

    public static void main(String[] args) {
        final int num1;
        final int num2;
        final char op;
        final int system;
        final Scanner reader = new Scanner(System.in);
        System.out.print("Введите первое число: ");
        num1 = reader.nextInt();
        System.out.print("Введите второе число: ");
        num2 = reader.nextInt();
        final Num numbers = new Num();
        numbers.setNum1(num1);
        numbers.setNum2(num2);

        System.out.print("\nВыберите систему исчисления (2, 8, 10, 16): ");
        system = reader.nextInt();
        System.out.print("\nВыберите операцию (+, -, *, /): ");
        op = reader.next().charAt(0);
        calculate(numbers, op, system);
    }
}