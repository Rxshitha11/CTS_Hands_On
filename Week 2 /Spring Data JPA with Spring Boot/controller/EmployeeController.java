package com.rishitha.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.rishitha.entity.Employee;
import com.rishitha.service.EmployeeService;

@Controller

public class EmployeeController {

    @Autowired
    private EmployeeService service;

    // Save Employee
    
    public Employee saveEmployee( Employee employee) {
        return service.saveEmployee(employee);
    }

    // Display All Employees
   
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    // Find Employee by ID
    
    public Employee getEmployeeById( int id) {
        return service.getEmployeeById(id);
    }

    // Update Employee
  
    public Employee updateEmployee( Employee employee) {
        return service.updateEmployee(employee);
    }

    // Delete Employee
    
    public String deleteEmployee( int id) {
        service.deleteEmployee(id);
        return "Employee Deleted Successfully";
    }
}