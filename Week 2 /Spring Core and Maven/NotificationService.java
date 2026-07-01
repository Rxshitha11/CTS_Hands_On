package com.rishitha.spring_core_demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NotificationService {

    private MessageService messageService;

    @Autowired
    public NotificationService(MessageService messageService) {
        this.messageService = messageService;
    }

    public void notifyUser() {
        messageService.sendMessage();
    }
}