package com.rishitha.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.rishitha.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
