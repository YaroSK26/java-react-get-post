package com.jaro.studentsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jaro.studentsystem.model.Student;
import com.jaro.studentsystem.repository.StudentRepo;

@Service
public class StudentServiceImplement implements StudentService {
    @Autowired
    private StudentRepo studentRepo;

    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

        @Override
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    
}
