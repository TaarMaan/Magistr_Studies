import java.util.ArrayList;

public class Main {

    private static final int KolichestvoChisel = 200_000_000;
    private static final int KolichestvoPotokov = 10;

    public static void main(String[] args) {
        System.out.println("Лабораторная работа №.3---Выполнил студент группы 6132 Артамонов В.А.");
        Posled.primes(KolichestvoChisel);
        ArrayList<Integer> primes1 = Parallel.primes(KolichestvoChisel, KolichestvoPotokov);

        System.out.println(primes1);
    }
}
