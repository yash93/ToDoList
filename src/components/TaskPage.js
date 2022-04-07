import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faRedoAlt,
  faWindowClose,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import "bulma/css/bulma.css";
import "../task/styles.css";

import TaskList from "../task/task-list";
import TodoForm from "../task/todo-form";

library.add(faCheck, faRedoAlt, faWindowClose, faBars);

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const handleAddTask = e => {
    setTasks(tasks => [...tasks, currentTask]);
    setCurrentTask(null);
    e.preventDefault();
  };

  const handleRemoveTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleCompleteTask = index => {
    const newTasks = [...tasks];
    newTasks[index].complete = !newTasks[index].complete;
    setTasks(newTasks);
  };

  return (
    <div className="TaskPage content">
      <h1 className="title">To Do List</h1>
      <TodoForm
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        handleAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        handleRemoveTask={handleRemoveTask}
        handleCompleteTask={handleCompleteTask}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");

export default TaskPage
