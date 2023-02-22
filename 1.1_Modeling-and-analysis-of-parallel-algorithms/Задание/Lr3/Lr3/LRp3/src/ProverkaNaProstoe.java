import java.util.ArrayList;

public class ProverkaNaProstoe extends Thread {

    private final ArrayList<Integer> primes;
    private final int LevayaGranica;
    private final int PravayaGranica;

    public ProverkaNaProstoe(ArrayList<Integer> primes, int LevayaGranica, int PravayaGranica) {

        if (LevayaGranica > PravayaGranica) {
            throw new IllegalArgumentException();
        }

        this.primes = primes;
        this.LevayaGranica = LevayaGranica;
        this.PravayaGranica = PravayaGranica;
    }

    @Override
    public void run() {

        int startNumber = (LevayaGranica % 2 == 0) ? LevayaGranica + 1 : LevayaGranica;

        for (int i = startNumber; i <= PravayaGranica; i += 2) {
            if (isPrime(i)) {
                synchronized (primes) {
                    primes.add(i);
                    primes.notifyAll();
                }
            }
        }

        System.out.println(Thread.currentThread().getName() + " finished " + "[" + LevayaGranica + "; " + PravayaGranica + "]");
    }

    private boolean isPrime(int number) {

        double sqrtedNumber = Math.sqrt(number);// в каждом диапазоне каждое нечетное число будет проверяться на простое
        //делением на предыдущие простые числа отобранные через корень из самого числа
        synchronized (primes) {
            while (primes.get(primes.size() - 1) < (int) sqrtedNumber) {
                try {
                    primes.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }

        for (int i = 0; i < primes.size(); i++) {
            if (primes.get(i) < number) {
                if (primes.get(i) > sqrtedNumber) {
                    return true;
                }

                if (number % primes.get(i) == 0) {
                    return false;
                }
            }
        }

        return true;
    }
}
