package com.example.demo.error;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class ErrorFields {
    private String field;
    private String code;
    private String defaultMessage;


    /**
     * Create List Of Errors Object
     *
     * @param errors org.springframework.validation.Errors
     * @return List<Error>
     * @author Mehdi Mejjad
     */
    public static List<ErrorFields> createErrorObjectList(Errors errors) {
        List<FieldError> errorFields = errors.getFieldErrors();
        List<ErrorFields> errorsList = new ArrayList<>();
        for (FieldError errorField : errorFields) {
            errorsList.add(new ErrorFields(errorField.getField(), errorField.getCode(), errorField.getDefaultMessage()));
        }
        return errorsList;
    }
}
