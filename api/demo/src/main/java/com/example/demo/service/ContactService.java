package com.example.demo.service;

import com.example.demo.model.Contact;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;


@SessionScope
@Service
@Slf4j
public class ContactService {

    private int counter = 0;

    public ContactService() {
        log.info("Contact Service Initialized");
    }

    public void saveMessageDetails(Contact contact) {
        log.error("contact saved");
    }

    public int getCounter() {
        return counter;
    }

    public void setCounter(int counter) {
        this.counter = counter;
    }
}
