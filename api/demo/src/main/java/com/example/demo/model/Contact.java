package com.example.demo.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Contact {
    private String name;
    private String mobileNumber;

    @Email
    @NotEmpty(message = "Email cannot be empty")
    private String email;
    private String subject;
    @NotEmpty
    private String message;

}
