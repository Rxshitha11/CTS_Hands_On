package com.rishitha.loanservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

    @GetMapping("/")
    public String home() {
        return "Loan Service is Running";
    }

    @GetMapping("/loan")
    public String loan() {
        return "Welcome to Loan Service";
    }
}