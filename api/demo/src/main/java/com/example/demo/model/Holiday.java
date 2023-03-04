package com.example.demo.model;


import com.example.demo.enums.Type;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Holiday {
    private final String day;
    private final String reason;
    private final Type type;


}
