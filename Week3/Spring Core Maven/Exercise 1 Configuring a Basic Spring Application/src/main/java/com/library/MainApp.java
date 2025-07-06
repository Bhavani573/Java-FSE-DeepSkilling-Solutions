package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring context from XML
        ApplicationContext context =
            new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the bean and use it
        BookService bookService = context.getBean("bookService", BookService.class);
        bookService.addBook("The Alchemist");
    }
}
