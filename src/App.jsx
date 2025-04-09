import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação.",
      description: "Aprender a utilizar React.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês.",
      description: "Aprender a pronúncia.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática.",
      description: "Aprender a resolver matrizes.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //Preciso atualizar essa tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id != taskId);
    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-950 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-white text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
