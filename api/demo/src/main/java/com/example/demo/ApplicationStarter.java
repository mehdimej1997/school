package com.example.demo;

import com.example.demo.model.Contact;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Objects;

@SpringBootApplication

public class ApplicationStarter {

    public static void main(String[] args) {
//        SpringApplication.run(ApplicationStarter.class, args);
        var ob1 = new Contact("mehdi", "0669468694","test@test.com", "test", "test" );
        var ob2 = new Contact("mehdi", "0669468694","test@test.co", "test", "test" );

        System.out.println(Objects.equals(ob1, ob2));
    }

}
