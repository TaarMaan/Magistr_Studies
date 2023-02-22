package org.example.LrT1;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Num {
    private int num1;
    private int num2;

    public static int toBinary(int num) {
        int n = Integer.parseInt(String.valueOf(num), 2);
        return n;
    }

    public static int toOctalString(int num) {
        int n = Integer.parseInt(String.valueOf(num), 8);
        return n;
    }

    public static int toHexString(int num) {
        int n = Integer.parseInt(String.valueOf(num), 16);
        return n;
    }
}