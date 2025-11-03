import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";
import { useTheme } from "../context/ThemeContext";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState("");
  const { theme, toggleTheme } = useTheme();

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <Card title="Task Manager">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border px-3 py-2 rounded-lg w-2/3 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <Button onClick={addTask} variant="primary" className="ml-3">Add</Button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
          <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
          <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
        </div>
        <Button variant="secondary" onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks found</p>
      ) : (
        <ul className="space-y-2">
        {filteredTasks.map((task) => (
            <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg animate-slideUp transition-all hover:scale-[1.01]"
            >
            <span
                onClick={() => toggleComplete(task.id)}
                className={`flex-1 cursor-pointer ${
                task.completed ? "line-through text-gray-400" : "hover:text-blue-500"
                }`}
            >
                {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
            </Button>
            </li>
        ))}
        </ul>
      )}
    </Card>
  );
};

export default TaskManager;
