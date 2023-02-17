package com.example.demo.service;

import com.example.demo.model.Contact;
import com.example.demo.error.ErrorFields;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j

public class ContactService {
    public void saveMessageDetails(Contact contact) {
        log.error("contact saved");
    }

}
