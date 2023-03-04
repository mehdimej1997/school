package com.example.demo.error;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;

@Data
@AllArgsConstructor
public class ErrorHandler {
    private Object data;
    private List<ErrorFields> errorFields;
}
