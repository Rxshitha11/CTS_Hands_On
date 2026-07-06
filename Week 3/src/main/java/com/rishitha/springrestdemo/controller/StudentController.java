package com.rishitha.springrestdemo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.rishitha.springrestdemo.entity.Student;

@RestController
public class StudentController {

    List<Student> students = new ArrayList<>();

    public StudentController() {
        students.add(new Student(101, "Rishitha", "CSBS"));
        students.add(new Student(102, "Priya", "IT"));
        students.add(new Student(103, "Kavya", "CSE"));
        students.add(new Student(104, "Nivetha", "ECE"));
    }

    // GET ALL STUDENTS
    @GetMapping("/students")
    public List<Student> getStudents() {
        return students;
    }

    // GET STUDENT BY ID
    @GetMapping("/students/{id}")
    public Student getStudentById(@PathVariable int id) {

        for (Student student : students) {
            if (student.getId() == id) {
                return student;
            }
        }

        return null;
    }

    // ADD NEW STUDENT
    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student) {

        students.add(student);

        return student;
    }

    // UPDATE STUDENT
    @PutMapping("/students/{id}")
    public Student updateStudent(@PathVariable int id,
                                 @RequestBody Student student) {

        for (int i = 0; i < students.size(); i++) {

            if (students.get(i).getId() == id) {
                students.set(i, student);
                return student;
            }
        }

        return null;
    }

    // DELETE STUDENT
    @DeleteMapping("/students/{id}")
    public String deleteStudent(@PathVariable int id) {

        for (Student student : students) {

            if (student.getId() == id) {
                students.remove(student);
                return "Student Deleted Successfully";
            }
        }

        return "Student Not Found";
    }
}