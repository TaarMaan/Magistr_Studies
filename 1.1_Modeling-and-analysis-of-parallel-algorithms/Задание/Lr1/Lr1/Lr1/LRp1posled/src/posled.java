import java.util.Scanner;

public class posled {
    public static void main(String[] args) {
        System.out.println("Лабораторная работа номер 1. Выполнил: Артамонов Владислав 6132");
        int massive_length = 100_000_000;
        Scanner scan = new Scanner(System.in);
        System.out.println("Длина массива  - 10^8 элементов.");
        System.out.print("Введите размер буфера: ");
        int buffer_length = scan.nextInt();
        int[] arr1 = new int[massive_length];
        for (int i = 0; i < massive_length; i++) {
            arr1[i] = i;
        }
        int[] arr2 = new int[massive_length];
        int[] buffer = new int[buffer_length];
        int pointer = 0;
        int counter_cycles = 5;
        long start = System.currentTimeMillis();
        for (int i = 0; i < counter_cycles; i++) {
            while (pointer + buffer_length <= massive_length) {
                for (int j = 0; j < buffer_length; j++) {
                    buffer[j] = arr1[j + pointer];
                }
                for ( int j = 0; j < buffer_length; j++) {
                    arr2[j + pointer]  = buffer[j];
                }
                pointer = pointer + buffer_length;
            }
            pointer = 0;
        }
        long finish = System.currentTimeMillis();
        long timeConsumedMillis = (finish - start) / counter_cycles;
        System.out.println("Время работы : " + timeConsumedMillis + " мс");
    }
}

