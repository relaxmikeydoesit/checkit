import styles from "@/styles/Todo.module.css";                                          
import { useState } from "react";
import { Task } from "@/components/Task.js";
import { Button, FormField } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);

  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className={styles.App}>
    <div className={styles.pageContainer}>
      <div className={styles.addTask}>
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div>
        {todoList.map((task) => {
          return (
            <Task 
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default App;

