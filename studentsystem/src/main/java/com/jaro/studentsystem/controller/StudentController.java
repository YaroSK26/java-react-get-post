package com.jaro.studentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.jaro.studentsystem.model.Student;
import com.jaro.studentsystem.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "Student added successfully";
    }

    @GetMapping("/all")
    public List<Student> getAll() {
        return studentService.getAllStudents();
    }

  @GetMapping("/get/{id}")
public Student get(@PathVariable("id") Integer id) {
    return studentService.getStudent(id);
}

    @DeleteMapping("/delete/{id}")
public String delete(@PathVariable("id") Integer id) {
    studentService.deleteStudent(id);
    return "Student deleted successfully";
}
}