/*
import java.util.Arrays;
import java.util.Scanner;
import java.util.Random;

class Producer implements Runnable {
    int[] arr1;
    Buffer buffer;

    public Producer(int[] a, Buffer b) {
        arr1 = a;
        buffer = b;
    }

    @Override
    public void run() {
        for (int i = 0; i < arr1.length; i++) {
            if (buffer.Put(arr1[i])) {
                i++;
            }
        }
    }
}

class Consumer implements Runnable {
    Buffer buffer;
    int[] arr2;

    public Consumer(int[] a, Buffer b) {
        arr2 = a;
        buffer = b;
    }

    @Override
    public void run() {
        int[] t = new int[1];
        for (int i = 0; i < arr2.length; ) {
            if (buffer.Read(t)) {
                arr2[i] = t[0];
                i++;
            }
        }
    }
}

class Buffer {
    int[] buffer;

    public Buffer(int buf_length) {

        buffer = new int[buf_length];
    }

    @Override
    public String toString() {
        return "Buffer{" +
                "buffer=" + Arrays.toString(buffer) +
                '}';
    }

    int[] chet1 = new int[]{0};
    int[] chet2 = new int[]{0};

    public boolean Put(int a) {
        if ((chet2[0] + 1) % buffer.length != (chet1[0])) {
            buffer[chet2[0]] = a;
            chet2 = (chet2[0] + 1) % buffer.length;
            return true;
        } else
            return false;
    }

    public boolean Read(int[] result) {
        if (chet1[0] != chet2[0]) {
            int b = chet1[0];
            chet1[0] = (chet1[0] + 1) % buffer.length;
            result[0] = buffer[b];
            return true;
        }
        return false;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Лабораторная работа номер 1. Выполнил: Артамонов Владислав 6132");
        int massive_length = 100_000_000;
        Scanner scan = new Scanner(System.in);
        System.out.println("Длина массива 10^8 элементов.");
        System.out.print("Введите длину буфера: ");
        int buf_length = scan.nextInt();
        int[] arr1 = new int[massive_length];
        int[] arr2 = new int[massive_length];
        Buffer buffer = new Buffer(buf_length);
        long totalTime = 0;
        int cycles = 5;
        Random random = new Random(System.currentTimeMillis());
        for (int k = 0; k < cycles; k++) {
            for (int i = 0; i < massive_length; i++) {
                arr1[i] = random.nextInt();
            }
            Producer producer = new Producer(arr1, buffer);
            Consumer consumer = new Consumer(arr2, buffer);
            Thread producer_thread = new Thread(producer);
            Thread consumer_thread = new Thread(consumer);
            long start = System.currentTimeMillis();
            producer_thread.start();
            consumer_thread.start();
            consumer_thread.join();
            long finish = System.currentTimeMillis();
            long timeConsumedMillis = (finish - start);
            totalTime += timeConsumedMillis;
            System.out.println(k + ") Время работы параллельной программы: " + timeConsumedMillis + "мс");
            System.out.println("Время работы параллельной программы: " + timeConsumedMillis + " мс");
        }
        System.out.println("Среднее время работы параллельной программы " + totalTIme / cycles + "мс");
    }
}
*/

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;


class Producer implements Runnable {
    int[] arr1;
    Buffer buffer;

    public Producer(int[] a, Buffer b) {
        arr1 = a;
        buffer = b;
    }

    @Override
    public void run() {
        for (int i = 0; i < arr1.length; ) {
            if (buffer.Put(arr1[i])) {

                i++;
            }

        }
    }
}

class Consumer implements Runnable {
    Buffer buffer;
    int[] arr2;

    public Consumer(int[] a, Buffer b) {
        arr2 = a;
        buffer = b;
    }

    @Override
    public void run() {
        int[] tmp = new int[1];
        for (int i = 0; i < arr2.length; ) {
            if (buffer.Read(tmp)) {
                arr2[i] = tmp[0];

                i++;
            }

        }
    }
}

class Buffer {
    int[] buffer1;

    public Buffer(int buffer_length) {
        buffer1 = new int[buffer_length];
    }

    @Override
    public String toString() {
        return "Buffer{" +
                "buffer1=" + Arrays.toString(buffer1) +
                '}';
    }

    int[] chet1 = new int[]{0};
    int[] chet2 = new int[]{0};

    public boolean Put(int a) {
        if ((chet2[0] + 1) % buffer1.length != (chet1[0])) {
            buffer1[chet2[0]] = a;

            chet2[0] = (chet2[0] + 1) % buffer1.length;


            return true;
        } else
            return false;
    }

    public boolean Read(int[] result) {
        if (chet1[0] != chet2[0]) {
            int b = chet1[0];

            chet1[0] = (chet1[0] + 1) % buffer1.length;

            result[0] = buffer1[b];
            return true;
        }
        return false;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Лабораторная работа номер 1. Выполнил: Артамонов Владислав 6132");
        int massive_length = 100_000_000;
        Scanner scan = new Scanner(System.in);
        System.out.println("Длина массива 10^8 элементов.");
        System.out.print("Введите длину буфера: ");
        int buffer_length = scan.nextInt();
        int[] arr1 = new int[massive_length];
        int[] arr2 = new int[massive_length];
        Buffer buffer = new Buffer(buffer_length);
        long totalTime = 0;
        int cycles = 5;
        Random random = new Random(System.currentTimeMillis());
        for (int j = 0; j < cycles; j++) {


            for (int i = 0; i < massive_length; i++) {
                arr1[i] = random.nextInt();
            }


            Producer producer = new Producer(arr1, buffer);
            Consumer consumer = new Consumer(arr2, buffer);
            Thread producer_thread = new Thread(producer);
            Thread consumer_thread = new Thread(consumer);

            long start = System.currentTimeMillis();
            producer_thread.start();
            consumer_thread.start();
            consumer_thread.join();
            long finish = System.currentTimeMillis();


            long timeConsumedMillis = (finish - start) /*/ cycles*/;
            totalTime += timeConsumedMillis;
            System.out.println(j + ") Время работы параллельной программы: " + timeConsumedMillis + " мс");
            System.out.println(Arrays.equals(arr1, arr2));
        }
        System.out.println("Среднее время работы параллельной программы: " + totalTime / cycles + " мс");
    }

}

