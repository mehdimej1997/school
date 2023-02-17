package com.example.demo.controller;

import com.example.demo.enums.Type;
import com.example.demo.model.Holiday;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HolidayController {
    @GetMapping("/holidays")
    public ResponseEntity<List<Holiday>> getHoliday() {
        List<Holiday> holidays = Arrays.asList(
                new Holiday("Jan 1", "New Year's Day", Type.FESTIVAL),
                new Holiday("Oct 31", "Halloween", Type.FESTIVAL),
                new Holiday("Sep 5", "Independence Day", Type.FEDERAL)
        );

        return ResponseEntity.status(HttpStatus.OK).body(holidays);
    }
}
