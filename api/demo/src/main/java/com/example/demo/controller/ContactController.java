package com.example.demo.controller;

import com.example.demo.model.Contact;
import com.example.demo.error.ErrorFields;
import com.example.demo.error.ErrorHandler;
import com.example.demo.service.ContactService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/send_msg")
    public ResponseEntity<String> saveMessage(@Valid @RequestBody Contact contact, Errors errors) throws JsonProcessingException {
        try {
            ObjectMapper mapper = new ObjectMapper();
            if (errors.hasErrors()) {
                List<ErrorFields> errorsList = ErrorFields.createErrorObjectList(errors);
                return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(mapper.writeValueAsString(new ErrorHandler(null, errorsList)));
            }
            ErrorHandler response = new ErrorHandler(contact, null);
            return ResponseEntity.status(HttpStatus.OK).body(mapper.writeValueAsString(response));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
