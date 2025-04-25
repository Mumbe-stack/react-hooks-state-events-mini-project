import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (text) => {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const displayedTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")}
        onTaskFormSubmit={handleNewTask}
      />
      <TaskList 
        tasks={displayedTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
