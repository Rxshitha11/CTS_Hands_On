package com.rishitha.accountservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/")
    public String home() {
        return "Account Service is Running";
    }

    @GetMapping("/account")
    public String account() {
        return "Welcome to Account Service";
    }
}