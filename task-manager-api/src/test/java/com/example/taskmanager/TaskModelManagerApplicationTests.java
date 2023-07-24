package com.example.taskmanager;

import com.example.taskmanager.model.TaskModel;
import com.example.taskmanager.repository.TaskRepository;
import com.example.taskmanager.services.TaskService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
class TaskModelManagerApplicationTests {

	@Autowired
	private TaskService taskService;

	@Test
	public void testSaveTask() {
		TaskModel task = new TaskModel();
		TaskRepository taskRepository = Mockito.mock(TaskRepository.class);
		Mockito.when(taskRepository.save(task)).thenReturn(task);
		TaskService taskService = new TaskService(taskRepository);

		TaskModel savedTask = taskService.save(task);

		Assertions.assertEquals(task, savedTask);
		Mockito.verify(taskRepository, Mockito.times(1)).save(task);
	}

	@Test
	public void testFindTaskById() {
		Long taskId = 1L;
		TaskModel task = new TaskModel();
		task.setId(taskId);
		TaskRepository taskRepository = Mockito.mock(TaskRepository.class);
		Mockito.when(taskRepository.findById(taskId)).thenReturn(Optional.of(task));
		TaskService taskService = new TaskService(taskRepository);

		Optional<TaskModel> foundTask = taskService.findById(taskId);

		Assertions.assertTrue(foundTask.isPresent());
		Assertions.assertEquals(task, foundTask.get());
		Mockito.verify(taskRepository, Mockito.times(1)).findById(taskId);
	}

	@Test
	public void testFindAllTasks() {
		List<TaskModel> taskList = new ArrayList<>();
		TaskRepository taskRepository = Mockito.mock(TaskRepository.class);
		Mockito.when(taskRepository.findAll()).thenReturn(taskList);
		TaskService taskService = new TaskService(taskRepository);

		List<TaskModel> foundTasks = taskService.findAll();

		Assertions.assertEquals(taskList, foundTasks);
		Mockito.verify(taskRepository, Mockito.times(1)).findAll();
	}

	@Test
	public void testDeleteTask() {
		TaskModel task = new TaskModel();
		TaskRepository taskRepository = Mockito.mock(TaskRepository.class);
		TaskService taskService = new TaskService(taskRepository);

		taskService.delete(task);

		Mockito.verify(taskRepository, Mockito.times(1)).delete(task);
	}
}
