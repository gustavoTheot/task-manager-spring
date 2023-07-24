package com.example.taskmanager.repository;

import com.example.taskmanager.model.TaskModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<TaskModel, Long> {
    List<TaskModel> findByTitle(String title);
    List<TaskModel> findByDescription(String description);
    List<TaskModel> findByResponsible(String responsible);
    List<TaskModel> findByStatus(boolean status);

}
