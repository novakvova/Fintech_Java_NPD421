package org.example;

import org.example.entities.CategoryEntity;
import org.example.utils.HibernateHelper;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        var session = HibernateHelper.getSession();
        try {
            session.beginTransaction();
            CategoryEntity salo =
                    new CategoryEntity("Сало");
            //Додати нову категорію
            session.persist(salo);
            //Зафіксувати зміни
            session.getTransaction().commit();
        }
        catch (Exception e) {
            System.out.println("Хюстон у нас проблеми"+e);
        }
        finally {
            session.close();
        }

        //Console.WriteLine()
//        Scanner scanner = new Scanner(System.in);
//        System.out.println("Скажіть, як Вас завати:");
//        String name = scanner.nextLine();
//        System.out.println("Привіт " + name + "!");
//        ViewInfo();
    }
    private static void ViewInfo() {
        System.out.print("Добре їсти, ");
        System.out.print("добре спати.\n");
        System.out.println("Має Бог здоров'я дати.");
        System.out.println("Слава Україні");
    }
}