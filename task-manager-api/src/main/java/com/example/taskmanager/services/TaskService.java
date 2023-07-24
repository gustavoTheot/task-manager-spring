package com.example.taskmanager.services;

import com.example.taskmanager.model.TaskModel;
import com.example.taskmanager.repository.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Transactional
    public List<TaskModel> findAll() {
        return taskRepository.findAll();
    }
    public TaskModel save(TaskModel taskModel) {
        return taskRepository.save(taskModel);
    }
    public Optional<TaskModel> findById(Long id) {
        return taskRepository.findById(id);
    }
    public void delete(TaskModel taskModel) {
        taskRepository.delete(taskModel);
    }

    public List<TaskModel> findByTitle(String title){
        return taskRepository.findByTitle(title);
    }

    public List<TaskModel> findByDescription(String description){
        return taskRepository.findByDescription(description);
    }

    public List<TaskModel> findByResponsible(String responsible){
        return taskRepository.findByResponsible(responsible);
    }

    public List<TaskModel> findByStatus(boolean status){
        return taskRepository.findByStatus(status);
    }
}
