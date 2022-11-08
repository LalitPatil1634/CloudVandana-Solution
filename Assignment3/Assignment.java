package Assignment3;

import java.util.Scanner;

public class Assignment {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a Sentence");
        String sentence = sc.nextLine();
        System.out.println("Enter a Letter");
        char letter = sc.next().charAt(0);
        int count = 0;
        for (int index = 0; index < sentence.length(); index++) {
            if (sentence.charAt(index) == letter) {
                System.out.println(sentence.substring((index + 1), sentence.length()));
                count = 1;
                break;
            } 
        }
        if (count != 1) {
            System.out.println("The letter does not exist in the sentence");
        }
        sc.close();
    }
}
