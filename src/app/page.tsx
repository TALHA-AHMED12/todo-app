"use client";

import React, { useState, ChangeEvent } from 'react';

interface Task {
  id: number;
  content: string;
}

export default function Home() {
  const [task, setTask] = useState<string>(''); // Current task being typed
  const [tasks, setTasks] = useState<Task[]>([]); // List of tasks

  // Handle input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  // Add new task to the list
  const addTask = () => {
    if (task.trim() !== '') {
      const newTask: Task = {
        id: Date.now(), // Use timestamp as unique ID
        content: task,
      };
      setTasks([...tasks, newTask]);
      setTask(''); // Clear the input after adding the task
    }
  };

  // Delete task from the list
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-slate-300 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-gray-400 shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">To-Do Application</h1>

        {/* Task input and Add button */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Enter a task"
            className="p-3 text-lg border border-gray-300 rounded-l-md w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="p-3 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition duration-300"
          >
            Add Task
          </button>
        </div>

        {/* List of tasks */}
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md"
            >
              <span>{task.content}</span>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
