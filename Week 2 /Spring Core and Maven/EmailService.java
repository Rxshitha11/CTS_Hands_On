package com.rishitha.spring_core_demo;

import org.springframework.stereotype.Component;

@Component
public class EmailService implements MessageService {

    @Override
    public void sendMessage() {
        System.out.println("Hello from Email Service!");
    }
}