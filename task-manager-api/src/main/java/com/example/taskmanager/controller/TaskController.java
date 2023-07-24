package com.example.taskmanager.controller;

import com.example.taskmanager.dto.TaskDTO;
import com.example.taskmanager.model.TaskModel;
import com.example.taskmanager.services.TaskService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/task")
public class TaskController {

    final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public ResponseEntity<List<TaskModel>> getAllTasks(){
        List<TaskModel> taskList = taskService.findAll();
        Collections.sort(taskList, (task1, task2) -> task1.getId().compareTo(task2.getId()));
        return ResponseEntity.status(HttpStatus.OK).body(taskList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskModel> getTaskById(@PathVariable Long id){
        Optional<TaskModel> searchId = taskService.findById(id);

        if(searchId.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        TaskModel taskModel = searchId.get();
        return ResponseEntity.status(HttpStatus.OK).body(taskModel);
    }

    @GetMapping("/search/titleDescription")
    public ResponseEntity<List<TaskModel>> getByTitleOrDescription(@RequestParam String title, @RequestParam(required = false) String description){
        List<TaskModel> taskListByTitle = new ArrayList<>();
        List<TaskModel> taskListByDescription = new ArrayList<>();

        if (title != null) {
            taskListByTitle = taskService.findByTitle(title);
        }

        if (description != null) {
            taskListByDescription = taskService.findByDescription(description);
        }

        List<TaskModel> searchTitleOrDescription = new ArrayList<>();
        searchTitleOrDescription.addAll(taskListByTitle);
        searchTitleOrDescription.addAll(taskListByDescription);

        return ResponseEntity.status(HttpStatus.OK).body(searchTitleOrDescription);
    }

    @GetMapping("/search/responsible")
    public ResponseEntity<List<TaskModel>> getByResponsible(@RequestParam String responsible){
        List<TaskModel> searchResponsible;

        if (responsible != null) {
            searchResponsible = taskService.findByResponsible(responsible);
        }else{
            searchResponsible = Collections.emptyList();
        }

        return ResponseEntity.status(HttpStatus.OK).body(searchResponsible);
    }

    @GetMapping("/search/status")
    public ResponseEntity<List<TaskModel>> getByStatus(@RequestParam(required = false) boolean status){
        List<TaskModel> searchStatus = taskService.findByStatus(status);

        return ResponseEntity.status(HttpStatus.OK).body(searchStatus);
    }

    @PostMapping
    public ResponseEntity<Object> createTask(@RequestBody @Valid TaskDTO taskRequestDTO){
        var taskModel = new TaskModel();
        BeanUtils.copyProperties(taskRequestDTO, taskModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.save(taskModel));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteTask(@PathVariable(value = "id") Long id){
        Optional<TaskModel> taskModelOption = taskService.findById(id);

        taskService.delete(taskModelOption.get());
        return ResponseEntity.status(HttpStatus.OK).body(taskModelOption.get());
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updateTask(@PathVariable(value = "id") Long id, @RequestBody @Valid TaskDTO taskDto){
        Optional<TaskModel> taskModelOption = taskService.findById(id);

        if(taskModelOption.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        TaskModel existingTask = taskModelOption.get();

        BeanUtils.copyProperties(taskDto, existingTask, getNullPropertyNames(taskDto));

        TaskModel updateTask = taskService.save(existingTask);
        return ResponseEntity.status(HttpStatus.OK).body(updateTask);
    }

    private String[] getNullPropertyNames(Object source) {
        List<String> nullProperties = new ArrayList<>();

        Field[] fields = source.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                field.setAccessible(true);
                Object value = field.get(source);
                if (value == null) {
                    nullProperties.add(field.getName());
                }
            } catch (IllegalAccessException e) {
                System.err.println("Erro ao acessar o campo: " + e.getMessage());
            }
        }

        return nullProperties.toArray(new String[0]);
    }


}
