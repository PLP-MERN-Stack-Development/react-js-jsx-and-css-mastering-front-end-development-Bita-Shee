import Card from '../ui/Card';
import Button from '../ui/Button';
import { useState, useEffect } from 'react';
import Form from '../layout/Form';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
   console.log("Component loaded!");
    }, []); 


  const handleAdd = (task) => {
  const newTask = { id: Date.now(), ...task, completed: false };
  setTasks(prev => [...prev, newTask]);
  };


  const handleMarkDone = (id) => {
  setTasks(prev => prev.map(task => 
    task.id === id ? { ...task, completed: true } : task
  ));
  };

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };


  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <main className="p-6">
      <Form onSubmit={handleAdd} />
       <div className="flex gap-2 mb-4">
        <Button variant="primary" onClick={() => setFilter("all")}>All</Button>
        <Button variant="secondary" onClick={() => setFilter("completed")}>Completed</Button>
        <Button variant="danger" onClick={() => setFilter("pending")}>Pending</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredTasks.map((task, index) => (
          <Card
            key={task.id }
            title={task.title}
            content={task.description}
            completed={task.completed}
            onMarkDone={() => handleMarkDone(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
    </main>
  );
}
