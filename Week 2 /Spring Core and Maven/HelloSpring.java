package com.rishitha.spring_core_demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HelloSpring {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext-annotation.xml");

        NotificationService notificationService =
                context.getBean(NotificationService.class);

        notificationService.notifyUser();
    }
}