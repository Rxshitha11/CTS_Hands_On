package com.rishitha.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rishitha.entity.Employee;
import com.rishitha.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    // Save Employee
    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    // Display All Employees
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // Find Employee by ID
    public Employee getEmployeeById(int id) {
        return repository.findById(id).orElse(null);
    }

    // Update Employee
    public Employee updateEmployee(Employee employee) {
        return repository.save(employee);
    }

    // Delete Employee
    public void deleteEmployee(int id) {
        repository.deleteById(id);
    }
}
