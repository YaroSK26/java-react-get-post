package com.jaro.studentsystem.service;

import java.util.List;

import com.jaro.studentsystem.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public Student getStudent(Integer id);
    public void deleteStudent(Integer id);
}